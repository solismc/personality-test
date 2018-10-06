﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using personality_test;

namespace personality_test.Migrations
{
    [DbContext(typeof(usersubscribersContext))]
    [Migration("20181006215507_Addsubscriberstable")]
    partial class Addsubscriberstable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("personality_test.Models.Subscribers", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EmailAddress");

                    b.Property<string>("FistName");

                    b.Property<string>("LastName");

                    b.Property<char>("PersonalityType");

                    b.HasKey("Id");

                    b.ToTable("SubscribersTable");
                });
#pragma warning restore 612, 618
        }
    }
}