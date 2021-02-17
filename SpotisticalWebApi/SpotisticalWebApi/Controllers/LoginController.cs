using Microsoft.AspNetCore.Mvc;
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
        public string ClientID { get; set; }

        public string ClientSecret { get; set; }

        public LoginController()
        {
            ClientID = Environment.GetEnvironmentVariable("SpotisticsClientID");
            ClientSecret = Environment.GetEnvironmentVariable("SpotisticsClientSecret");
        }

        [HttpGet]
        public string Login()
        {
            var loginRequest = new LoginRequest(redirectUri: new Uri("http://localhost:4200/"), clientId: ClientID, responseType: LoginRequest.ResponseType.Code)
            {
                Scope = new[] { Scopes.UserTopRead, Scopes.UserReadEmail, Scopes.UserReadPrivate },
                ShowDialog = true
            };

            var uri = loginRequest.ToUri().ToString();

            return uri;
        }

        [HttpPost]
        public async Task<UserInformation> Login(SpotifyCode spotifyCode)
        {
            AuthorizationCodeTokenResponse response = new AuthorizationCodeTokenResponse();
            
            try 
            {
                response = await new OAuthClient().RequestToken(new AuthorizationCodeTokenRequest(ClientID, ClientSecret, spotifyCode.Code, new Uri("http://localhost:4200")));
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            var spotify = new SpotifyClient(response.AccessToken);

            var user = await spotify.UserProfile.Current();

            var userInformation = new UserInformation(user.DisplayName);

            return userInformation;
        }
    }
}
