﻿using System.ComponentModel.DataAnnotations;

 namespace RCCS_Auth_Test_Project.Models.DTOs
{
    public class Admin
    {
        [MaxLength(64)]
        public string FirstName { get; set; }
        [MaxLength(32)]
        public string LastName { get; set; }
        [MaxLength(254)]
        public string PersonaleId { get; set; }
        [MaxLength(60)]
        public string Password { get; set; }
    }
}
