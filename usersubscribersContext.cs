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
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=localhost;Database=usersubscribers");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}

        public DbSet <Subscribers> SubscribersTable { get; set; }

    }
}