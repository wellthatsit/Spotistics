using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class UserInformation
    {
        public UserInformation(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
    }
}
