using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RaptorHouseApi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Image { get; set; }

        public decimal? Weight { get; set; }
        public decimal? Price { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
