using ASP.NETCoreWebApplication.Entities;
using ASP.NETCoreWebApplication.Models.Users;
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