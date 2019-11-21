using System;
using System.ComponentModel.DataAnnotations;

namespace PortalRandkowy.API.Dtos
{

    public class UserForRegisterDto
    {

        [Required(ErrorMessage = "Nazwa uzytkownika jest wymagana")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Hasło uzytkownika jest wymagane")]
        [StringLength(12, MinimumLength = 6, ErrorMessage = "Hasło musi mieć 6 - 12 znaków")]
        public string Password { get; set; }

        [Required]
        public string Gender { get; set; }
        [Required]

        public DateTime DateOfBirth { get; set; }
        [Required]
        public string ZodiakSign { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }


    }
}