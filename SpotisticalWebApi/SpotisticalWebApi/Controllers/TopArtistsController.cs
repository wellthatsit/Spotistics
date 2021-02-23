using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpotisticalWebApi.Models;
using SpotisticalWebApi.Services;

namespace SpotisticalWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TopArtistsController : ControllerBase
    {
        private SpotisticsDbContext _context;
        private SpotisticsService _spotisticsService;

        public TopArtistsController(SpotisticsDbContext context)
        {
            _context = context;
            _spotisticsService = new SpotisticsService(context);
        }

        [HttpGet]
        public async Task<TopArtistsResult> GetTopArtists(string userID, string accessToken, string timeRange)
        {
            var result = await _spotisticsService.GetTopArtists(userID, accessToken, timeRange);

            return result;
        }
    }
}
