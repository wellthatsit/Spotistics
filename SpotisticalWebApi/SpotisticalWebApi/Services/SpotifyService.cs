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
            var topTracks = new List<Track>();
            Paging<FullTrack> tracks;
            var personalization = new PersonalizationTopRequest();
            personalization.TimeRangeParam = PersonalizationTopRequest.TimeRange.ShortTerm;

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

            foreach (var track in tracks.Items)
            {
                topTracks.Add(new Track(track));
            }

            var result = new TopTracksResult();
            result.TopTracks = topTracks;
            result.AccessToken = accessToken;

            return result;
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
