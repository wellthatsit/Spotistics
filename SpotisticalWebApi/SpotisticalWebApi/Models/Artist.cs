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
            // the album covers are added to the Images list in a descending order by size
            // we only need the smallest sized cover
            //CoverUrl = fullArtist.Images.ElementAt(fullArtist.Images.Count - 1).Url;
            CoverUrl = fullArtist.Images.ElementAt(0).Url;
            Name = fullArtist.Name;
        }
    }
}