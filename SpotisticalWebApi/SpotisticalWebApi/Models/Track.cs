using SpotifyAPI.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class Track
    {
        public List<string> Artists { get; set; }

        public string Title { get; set; }

        public string CoverUrl { get; set; }

        public Track(FullTrack track)
        {
            // the album covers are added to the Images list in a descending order by size
            // we only need the smallest sized cover
            //CoverUrl = track.Album.Images.ElementAt(track.Album.Images.Count - 1).Url;
            CoverUrl = track.Album.Images.ElementAt(0).Url;
            Artists = track.Artists.Select(a => a.Name).ToList();
            Title = track.Name;
        }
    }
}
