using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using personality_test.Models;

namespace personality_test
{
    public partial class usersubscribersContext : DbContext
    {
        public usersubscribersContext()
        {
        }

        public usersubscribersContext(DbContextOptions<usersubscribersContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            var conn = Environment.GetEnvironmentVariable("CONNECTION_STRING") ?? "server=localhost;Database=usersubscribers";   
                optionsBuilder.UseNpgsql(conn);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}

        public DbSet <Subscribers> SubscribersTable { get; set; }

    }
}