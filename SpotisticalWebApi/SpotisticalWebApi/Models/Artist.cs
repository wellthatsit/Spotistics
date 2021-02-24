using SpotifyAPI.Web;
using System.Linq;

namespace SpotisticalWebApi.Models
{
    public class Artist
    {
        public string Name { get; set; }

        public string CoverUrl { get; set; }

        public Artist(FullArtist fullArtist)
        {
            CoverUrl = fullArtist.Images[0].Url;
            Name = fullArtist.Name;
        }
    }
}