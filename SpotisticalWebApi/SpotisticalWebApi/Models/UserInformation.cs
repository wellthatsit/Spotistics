using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class UserInformation
    {
        public UserInformation(string name, string userID, string accessToken)
        {
            Name = name;
            UserID = userID;
            AccessToken = accessToken;
        }

        public string Name { get; set; }

        public string UserID { get; set; }

        public string AccessToken { get; set; }
    }
}
