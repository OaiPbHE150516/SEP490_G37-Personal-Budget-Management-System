using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace pbms_be.Data
{
    public class PbmsDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public DbSet<Sample> Sample { get; set; }

        public PbmsDbContext(DbContextOptions options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = _configuration.GetConnectionString("ConnectionString");
            optionsBuilder.UseNpgsql(connectionString);
        }
    }
}
