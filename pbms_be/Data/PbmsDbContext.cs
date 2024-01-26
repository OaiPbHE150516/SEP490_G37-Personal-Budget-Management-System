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
            if (System.Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production")
            {
                var instanceConnectionName = System.Environment.GetEnvironmentVariable("INSTANCE_UNIX_SOCKET");
                var databaseName = System.Environment.GetEnvironmentVariable("DB_NAME");
                var userId = System.Environment.GetEnvironmentVariable("DB_USER");
                var password = System.Environment.GetEnvironmentVariable("DB_PASS");
                connectionString = $"Host={instanceConnectionName};User Id={userId};Password={password};Database={databaseName}";
                //connectionString = "Host=/cloudsql/lexical-aileron-410114:asia-southeast1:pbmspostgresql;User Id=postgres;Password=123456789;Database=postgres";
            }
            else
            {
                // get connection string environment variable
                var env = System.Environment.GetEnvironmentVariable("PBMS_CONNECTION_STRING");
                // if not set. throw exception and stop the program
                if (env == null)
                {
                    throw new System.Exception("Connection string not set");
                }
                connectionString = env;
                //connectionString = _configuration.GetConnectionString("ConnectionString");
                //connectionString = "Host=35.198.233.122;User Id=postgres;Password=123456789;Database=postgres";
            }
            optionsBuilder.UseNpgsql(connectionString);
        }
    }
}
