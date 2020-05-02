using AutoMapper;
using RCCS_Auth_Test_Project.Entities;
using RCCS_Auth_Test_Project.Models.Users;

namespace RCCS_Auth_Test_Project.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserModel>();
            CreateMap<RegisterModel, User>();
            CreateMap<UpdateModel, User>();
        }
    }
}