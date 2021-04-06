using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RaptorHouseApi.Models
{
    public class Message
    {
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Content{ get; set; }

        public DateTime Date { get; set; }

        
    }
}
