using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class TopArtistsResult
    {
        public List<Artist> TopArtists { get; set; }

        public string AccessToken { get; set; }
    }
}
