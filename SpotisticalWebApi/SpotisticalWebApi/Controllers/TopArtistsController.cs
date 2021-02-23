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
        private SpotisticsService _service;

        public TopArtistsController(SpotisticsDbContext context)
        {
            _context = context;
            _service = new SpotisticsService(context);
        }

        [HttpGet]
        public async Task<TopArtistsResult> GetTopArtists(string userID, string accessToken, string timeRange)
        {
            var result = await _service.GetTopArtists(userID, accessToken, timeRange);

            return result;
        }
    }
}
