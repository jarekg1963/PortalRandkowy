using System.Collections.Generic;
using System.Threading.Tasks;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Data
{
    public interface IUserRepository: IGenericRepository
    {
        System.Threading.Tasks.Task<IEnumerable<User>> GetUsers();

        //  System.Threading.Tasks.Task<IEnumerable<Photo>> GetPhotosForUser(int userId);
        Task<User> GetUser(int id);

        Task<Photo> GetPhoto(int id);

        Task<Photo> GetMainPhotoForUser (int useId);

        //Task<Photo> GetPhotosForUser (int userId);
    }
}