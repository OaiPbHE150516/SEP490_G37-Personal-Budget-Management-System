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
            if (System.Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production")
            {
                var instanceConnectionName = System.Environment.GetEnvironmentVariable("INSTANCE_UNIX_SOCKET");
                var databaseName = System.Environment.GetEnvironmentVariable("DB_NAME");
                var userId = System.Environment.GetEnvironmentVariable("DB_USER");
                var password = System.Environment.GetEnvironmentVariable("DB_PASS");
                connectionString = $"Host={instanceConnectionName};User Id={userId};Password={password};Database={databaseName}";
            }
            else
            {
                var env = System.Environment.GetEnvironmentVariable("PBMS_CONNECTION_STRING");
                if (env == null)
                {
                    connectionString = _configuration.GetConnectionString("ConnectionString");
                    throw new System.Exception("Connection string not set");
                }
            }
            optionsBuilder.UseNpgsql(connectionString);
        }
    }
}
