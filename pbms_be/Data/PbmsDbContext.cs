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
            var connectionString = "";
            // check if running on GCP or local machine
            if (System.Environment.GetEnvironmentVariable("_ASPNETCORE_ENVIRONMENT") == "Production")
            {
                connectionString = "Host=/cloudsql/lexical-aileron-410114:asia-southeast1:pbmspostgresql;User Id=postgres;Password=123456789;Database=postgres";
            }
            else
            {
                connectionString = "Host=35.198.233.122;User Id=postgres;Password=123456789;Database=postgres";
            }
            optionsBuilder.UseNpgsql(connectionString);
        }
    }
}
