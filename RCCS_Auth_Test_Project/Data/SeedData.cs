using System;
using System.Linq;
using RCCS_Auth_Test_Project.Models.Entities;
using static BCrypt.Net.BCrypt;

namespace RCCS_Auth_Test_Project.Data
{
    public static class DbUtilities
    {
        public const int BcryptWorkfactor = 10;

        public static void SeedUsers(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();
            if (!context.Users.Any())
                SeedAccounts(context);
            if (!context.Admins.Any())
                SeedAdmins(context);
        }

        static void SeedAccounts(ApplicationDbContext context)
        {
            context.Users.AddRange(
                // Seed admin
                new EfUser
                {
                    PersonaleId = "Admin",
                    PwHash = HashPassword("imtheadmin", BcryptWorkfactor),
                    Role = Role.Admin
                }
                // TO DO: Seed other users
            );
            context.SaveChanges();
        }

        static void SeedAdmins(ApplicationDbContext context)
        {
            context.Admins.Add(
                new EfAdmin
                {
                    EfUserId = 1,
                    PersonaleId = "Admin",
                    FirstName = "AdminFirstName",
                    LastName = "AdminLastName",

                });
                context.SaveChanges();
        }
    }
}
