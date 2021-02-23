using SpotifyAPI.Web;

namespace SpotisticalWebApi.Models
{
    public class Artist
    {
        public string Name { get; set; }

        public Artist(FullArtist fullArtist)
        {
            Name = fullArtist.Name;
        }
    }
}