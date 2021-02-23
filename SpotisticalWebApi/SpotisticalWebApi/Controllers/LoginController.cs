using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SpotifyAPI.Web;
using SpotisticalWebApi.Models;
using SpotisticalWebApi.Services;
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
        private SpotisticsService _spotifyService;

        private SpotisticsDbContext _context; 

        public LoginController(SpotisticsDbContext context)
        {
            _context = context;
            _spotifyService = new SpotisticsService(context);
        }

        [HttpGet]
        public string Login()
        {
            var loginRequest = new LoginRequest(_spotifyService.RedirectUri, _spotifyService.ClientID, responseType: LoginRequest.ResponseType.Code)
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
            var response = await new OAuthClient()
                .RequestToken(new AuthorizationCodeTokenRequest(_spotifyService.ClientID, _spotifyService.ClientSecret, spotifyCode.Code, _spotifyService.RedirectUri));
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
