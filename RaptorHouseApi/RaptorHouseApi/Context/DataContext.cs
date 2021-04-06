using Microsoft.EntityFrameworkCore;
using RaptorHouseApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RaptorHouseApi.Context
{
    public class DataContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        public DbSet<Message> Messages { get; set; }

        public DbSet<Contact> Contact { get; set; }
        public DbSet<Home> Home { get; set; }
        public DbSet<Slider> Slider { get; set; }

        public DbSet<User> Users { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite("datasource=raptorhouse.db");
            }
        }
    }
}
