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
    [Route("/api/[controller]/[action]")]
    public class PlaylistController : ControllerBase
    {
        private SpotisticsDbContext _context;
        private SpotisticsService _spotisticsService;

        public PlaylistController(SpotisticsDbContext context)
        {
            _context = context;
            _spotisticsService = new SpotisticsService(_context);
        }

        [HttpPost]
        public async Task<bool> Create(CreateTopTracksPlaylistRequest request)
        {
            var result = await _spotisticsService.CreatePlaylist(request);

            return result;
        }
    }
}
