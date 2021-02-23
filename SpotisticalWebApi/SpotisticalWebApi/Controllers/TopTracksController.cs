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
        private SpotisticsService _spotisticsService;
        private SpotisticsDbContext _context;

        public TopTracksController(SpotisticsDbContext context)
        {
            _context = context;
            _spotisticsService = new SpotisticsService(context);
        }

        [HttpGet]
        public async Task<TopTracksResult> GetTopTracks(string userID, string accessToken, string timeRange)
        {
            var result = await _spotisticsService.GetTopTracks(userID, accessToken, timeRange);

            return result;
        }
    }
}
