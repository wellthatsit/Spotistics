using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SpotifyAPI.Web;
using SpotisticalWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private string ClientID { get; set; }
        private string ClientSecret { get; set; }
        private Uri RedirectUri { get; set; } = new Uri("http://localhost:4200/login");

        private SpotisticsDbContext _context; 

        public LoginController(SpotisticsDbContext context)
        {
            ClientID = Environment.GetEnvironmentVariable("SpotisticsClientID");
            ClientSecret = Environment.GetEnvironmentVariable("SpotisticsClientSecret");
            _context = context;
        }

        [HttpGet]
        public string Login()
        {
            var loginRequest = new LoginRequest(redirectUri: RedirectUri, clientId: ClientID, responseType: LoginRequest.ResponseType.Code)
            {
                Scope = new[] { Scopes.UserTopRead, Scopes.UserReadEmail, Scopes.UserReadPrivate },
                ShowDialog = true
            };
            var url = loginRequest.ToUri().ToString();

            return url;
        }

        [HttpPost]
        public async Task<UserInformation> Login(SpotifyCode spotifyCode)
        {
            var response = await new OAuthClient().RequestToken(new AuthorizationCodeTokenRequest(ClientID, ClientSecret, spotifyCode.Code, RedirectUri));
            var spotify = new SpotifyClient(response.AccessToken);
            var user = await spotify.UserProfile.Current();
            var userInformation = new UserInformation(user.DisplayName, user.Id, response.AccessToken);

            // save refresh token to DB
            var token = await _context.RefreshTokens.FirstOrDefaultAsync(t => t.UserID == user.Id);
            if (token != null)
            {
                token.Token = response.RefreshToken;
            }
            else
            {
                var refreshToken = new RefreshToken(user.Id, response.RefreshToken);
                await _context.RefreshTokens.AddAsync(refreshToken);
            }
            await _context.SaveChangesAsync();

            return userInformation;
        }
    }
}
