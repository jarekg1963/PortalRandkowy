using System.Collections.Generic;
using System.Threading.Tasks;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Data
{
    public interface IUserRepository: IGenericRepository
    {
        System.Threading.Tasks.Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}