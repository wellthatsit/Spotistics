using Microsoft.EntityFrameworkCore;
using SpotifyAPI.Web;
using SpotisticalWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Services
{
    public class SpotisticsService
    {
        public string ClientID { get; set; }
        public string ClientSecret { get; set; }
        public Uri RedirectUri { get; set; }

        private SpotisticsDbContext _context;

        public SpotisticsService(SpotisticsDbContext context)
        {
            _context = context;
            var redirectUrl = Environment.GetEnvironmentVariable("SpotisticsRedirectUrl");
            RedirectUri = new Uri(redirectUrl);
            ClientID = Environment.GetEnvironmentVariable("SpotisticsClientID");
            ClientSecret = Environment.GetEnvironmentVariable("SpotisticsClientSecret");
        }

        public async Task<TopTracksResult> GetTopTracks(string userID, string accessToken, string timeRange)
        {
            Paging<FullTrack> tracks;
            var personalization = GetPersonalizationTopRequest(timeRange);

            try
            {
                tracks = await GetTopTracksFromSpotify(accessToken, personalization);
            }
            // access token expired
            catch (APIException)
            {
                accessToken = await RefreshAccessToken(userID);
                tracks = await GetTopTracksFromSpotify(accessToken, personalization);
            }

            var topTracks = new List<Track>();
            foreach (var track in tracks.Items)
            {
                topTracks.Add(new Track(track));
            }

            var result = new TopTracksResult
            {
                TopTracks = topTracks,
                AccessToken = accessToken
            };

            return result;
        }

        private async Task<Paging<FullTrack>> GetTopTracksFromSpotify(string accessToken, PersonalizationTopRequest personalization)
        {
            var spotify = new SpotifyClient(accessToken);
            var tracks = await spotify.Personalization.GetTopTracks(personalization);

            return tracks;
        }

        public async Task<TopArtistsResult> GetTopArtists(string userID, string accessToken, string timeRange)
        {
            var personalization = GetPersonalizationTopRequest(timeRange);
            Paging<FullArtist> artists;

            try
            {
                var spotify = new SpotifyClient(accessToken);
                artists = await GetTopArtistsFromSpotify(accessToken, personalization);
            }
            // access token expired
            catch (APIException)
            {
                artists = await GetTopArtistsFromSpotify(accessToken, personalization);
            }

            var topArtists = new List<Artist>();
            foreach(var artist in artists.Items)
            {
                topArtists.Add(new Artist(artist));
            }

            var result = new TopArtistsResult
            {
                TopArtists = topArtists,
                AccessToken = accessToken
            };

            return result;
        }

        private async Task<Paging<FullArtist>> GetTopArtistsFromSpotify(string accessToken, PersonalizationTopRequest personalization)
        {
            var spotify = new SpotifyClient(accessToken);
            var artists = await spotify.Personalization.GetTopArtists(personalization);

            return artists;
        }

        public async Task<bool> CreatePlaylist(CreateTopTracksPlaylistRequest request)
        {
            var result = false;
            try
            {
                result = await CreatePlaylistOnSpotify(request);
            }
            // access token expired
            catch (APIException)
            {
                result = await CreatePlaylistOnSpotify(request);
            }

            return result;
        }

        private async Task<bool> CreatePlaylistOnSpotify(CreateTopTracksPlaylistRequest request)
        {
            var spotify = new SpotifyClient(request.AccessToken);
            var playlist = await spotify.Playlists.Create(request.UserID, new PlaylistCreateRequest($"{request.PlaylistName} {DateTime.Now}"));
            await spotify.Playlists.AddItems(playlist.Id, new PlaylistAddItemsRequest(request.TrackUris));

            return true;
        }

        public PersonalizationTopRequest GetPersonalizationTopRequest(string timeRange)
        {
            var personalization = new PersonalizationTopRequest();

            if (timeRange == "short_term")
                personalization.TimeRangeParam = PersonalizationTopRequest.TimeRange.ShortTerm;
            else if (timeRange == "medium_term")
                personalization.TimeRangeParam = PersonalizationTopRequest.TimeRange.MediumTerm;
            else
                personalization.TimeRangeParam = PersonalizationTopRequest.TimeRange.LongTerm;

            personalization.Limit = 50;

            return personalization;
        }

        public async Task<string> RefreshAccessToken(string userID)
        {
            var token = await _context.RefreshTokens.FirstOrDefaultAsync(t => t.UserID == userID);
            if (token == null)
            {
                throw new Exception("userID not found in database");
            }

            var response = await new OAuthClient().RequestToken(new AuthorizationCodeRefreshRequest(ClientID, ClientSecret, token.Token));
            return response.AccessToken;
        }
    }
}
