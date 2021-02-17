using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class Track
    {
        public Track()
        {

        }

        public Track(string title)
        {
            Title = title;
        }

        public string Title { get; set; }
    }
}
