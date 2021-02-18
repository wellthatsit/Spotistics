using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotisticalWebApi.Models
{
    public class SpotisticsDbContext : DbContext
    {
        public SpotisticsDbContext(DbContextOptions<SpotisticsDbContext> options) : base(options)
        {

        }

        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }
}
