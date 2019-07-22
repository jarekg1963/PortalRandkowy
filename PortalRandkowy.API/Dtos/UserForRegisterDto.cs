using System.ComponentModel.DataAnnotations;

namespace PortalRandkowy.API.Dtos
{
    
    public class UserForRegisterDto
    {
        
         [Required(ErrorMessage="Nazwa uzytkownika jest wymagana")]
        public string Username { get; set; }
       [Required(ErrorMessage="Hasło uzytkownika jest wymagane")]
        [StringLength(12, MinimumLength=6 , ErrorMessage="Hasło musi mieć 6 - 12 znaków")]
        public string  Password { get; set; }


     
    }
}