using ASP.NETCoreWebApplication.Helpers.Entities;
using ASP.NETCoreWebApplication.Helpers.Models.Users;
using AutoMapper;

namespace ASP.NETCoreWebApplication.Helpers
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