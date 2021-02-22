using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class TopTracksResult
    {
        public List<Track> TopTracks { get; set; }

        public string AccessToken { get; set; }
    }
}
