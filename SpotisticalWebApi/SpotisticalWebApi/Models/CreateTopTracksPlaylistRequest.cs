using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class CreateTopTracksPlaylistRequest
    {
        public string UserID { get; set; }

        public string AccessToken { get; set; }

        public List<string> TrackUris { get; set; }

        public string PlaylistName { get; set; }
    }
}
