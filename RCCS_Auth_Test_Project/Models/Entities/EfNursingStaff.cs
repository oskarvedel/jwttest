using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RCCS_Auth_Test_Project.Models.Entities
{
    public class EfNursingStaff
    {
        public long EfNursingStaffId { get; set; }
        public long EfUserId { get; set; }
        public EfUser User { get; set; }
        [MaxLength(64)]
        public string FirstName { get; set; }
        [MaxLength(32)]
        public string LastName { get; set; }
        [MaxLength(254)]
        public string PersonaleId { get; set; }
        [MaxLength(12)]
        public string PhoneNo { get; set; }
    }
}
