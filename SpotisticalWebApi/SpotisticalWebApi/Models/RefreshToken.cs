using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class RefreshToken
    {
        public RefreshToken()
        {

        }

        public RefreshToken(string userID, string refreshToken)
        {
            UserID = userID;
            Token = refreshToken;
        }

        [Key]
        public int ID { get; set; }

        public string UserID { get; set; }

        public string Token { get; set; }
    }
}
