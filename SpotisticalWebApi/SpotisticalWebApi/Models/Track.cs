﻿using SpotifyAPI.Web;
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

        public Track(FullTrack track)
        {
            Artists = track.Artists.Select(a => a.Name).ToList();
            Title = track.Name;
        }
    }
}
