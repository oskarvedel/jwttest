﻿using System;
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
            if (!context.Coordinators.Any())
                SeedCoordinators(context);
        }

        static void SeedAccounts(ApplicationDbContext context)
        {
            context.Users.AddRange(
                // Seed admin
                new EfUser
                {
                    PersonaleId = "Admin",
                    PwHash = HashPassword("Admin", BcryptWorkfactor),
                    Role = Role.Admin
                },
            // Seed Coordinator
            new EfUser
                {
                    PersonaleId = "Coordinator",
                    PwHash = HashPassword("Coordinator", BcryptWorkfactor),
                    Role = Role.Coordinator
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
        static void SeedCoordinators(ApplicationDbContext context)
        {
            context.Coordinators.Add(
                new EfCoordinator()
                {
                    EfUserId = 2,
                    PersonaleId = "Coordinator",
                    FirstName = "CoordinatorFirstName",
                    LastName = "CoordinatorLastName",

                });
            context.SaveChanges();
        }
    }
}
