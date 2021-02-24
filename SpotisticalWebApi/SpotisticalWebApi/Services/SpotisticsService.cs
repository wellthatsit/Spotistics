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
                var spotify = new SpotifyClient(accessToken);
                tracks = await spotify.Personalization.GetTopTracks(personalization);
            }
            catch (APIException)
            {
                // access token expired
                accessToken = await RefreshAccessToken(userID);
                var spotify = new SpotifyClient(accessToken);
                tracks = await spotify.Personalization.GetTopTracks(personalization);
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

        public async Task<TopArtistsResult> GetTopArtists(string userID, string accessToken, string timeRange)
        {
            var personalization = GetPersonalizationTopRequest(timeRange);
            Paging<FullArtist> artists;

            try
            {
                var spotify = new SpotifyClient(accessToken);
                artists = await spotify.Personalization.GetTopArtists(personalization);
            }
            catch (APIException)
            {
                // access token expired
                accessToken = await RefreshAccessToken(userID);
                var spotify = new SpotifyClient(accessToken);
                artists = await spotify.Personalization.GetTopArtists(personalization);
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
