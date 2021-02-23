using Microsoft.EntityFrameworkCore;
using SpotifyAPI.Web;
using SpotisticalWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Services
{
    public class SpotifyService
    {
        public string ClientID { get; set; }
        public string ClientSecret { get; set; }
        public Uri RedirectUri { get; set; } = new Uri("http://localhost:4200/login");

        private SpotisticsDbContext _context;

        public SpotifyService(SpotisticsDbContext context)
        {
            _context = context;
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

        public PersonalizationTopRequest GetPersonalizationTopRequest(string timeRange)
        {
            var personalization = new PersonalizationTopRequest();

            if (timeRange == "short_term")
                personalization.TimeRangeParam = PersonalizationTopRequest.TimeRange.ShortTerm;
            else if (timeRange == "mid_term")
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
