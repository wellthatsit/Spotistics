using Microsoft.AspNetCore.Mvc;
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
    public class TopTracksController : ControllerBase
    {
        private SpotisticsService _spotifyService;
        private SpotisticsDbContext _context;

        public TopTracksController(SpotisticsDbContext context)
        {
            _context = context;
            _spotifyService = new SpotisticsService(context);
        }

        [HttpGet]
        public async Task<TopTracksResult> GetTopTracks(string userID, string accessToken, string timeRange)
        {
            var result = await _spotifyService.GetTopTracks(userID, accessToken, timeRange);

            return result;
        }
    }
}
