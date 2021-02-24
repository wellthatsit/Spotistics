using SpotifyAPI.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class Track
    {
        public string Artists { get; set; }

        public string Title { get; set; }

        public string CoverUrl { get; set; }

        public Track(FullTrack track)
        {
            CoverUrl = track.Album.Images[0].Url;

            var sb = new StringBuilder();
            for (int i = 0; i < track.Artists.Count; i++)
            {
                sb.Append(track.Artists[i].Name);
                if (i + 1 < track.Artists.Count)
                    sb.Append(", ");
            }
            Artists = sb.ToString();

            Title = track.Name;
        }
    }
}
