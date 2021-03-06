using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PortalRandkowy.API.Data;
using PortalRandkowy.API.Dtos;
using PortalRandkowy.API.Models;



namespace PortalRandkowy.API.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase {
        private readonly IAuthRepository _repository;
        private readonly IConfiguration _config;

        private readonly IMapper _mapper;
        public AuthController (IAuthRepository repository, IConfiguration config, IMapper mapper) {
            _config = config;
            _repository = repository;
            _mapper = mapper;

        }

        [HttpPost ("register")]
        public async Task<IActionResult> register(UserForRegisterDto userForRegisterDto) {

              
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower ();
        
            if (await _repository.UserExist (userForRegisterDto.Username))
                return BadRequest ("Uzykowsnik o takiej nazwie istenieje");

            var userToCreate = _mapper.Map<User>(userForRegisterDto);
            
            var createdUser = await _repository.Register (userToCreate, userForRegisterDto.Password);

var userToReturn = _mapper.Map<UserForDetailsDto>(createdUser);
            return CreatedAtRoute("GetUser", new { controller = "Users" , Id = createdUser.Id}, userToReturn);
        }

        [HttpPost ("login")]
        public async Task<IActionResult> Login (UserForLoginDto userForLoginDto) {
            
            var userFromRepo = await _repository.Login (userForLoginDto.Username.ToLower (), userForLoginDto.password);

            if (userFromRepo == null)
                return Unauthorized ();

            // tworzymy token JWT 

            var claims = new [] {
                new Claim (ClaimTypes.NameIdentifier, userFromRepo.Id.ToString ()),
                new Claim (ClaimTypes.Name, userFromRepo.Username)
            };

  
       
           var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
               
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var  tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires =  DateTime.Now.AddHours(12),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var user = _mapper.Map<UserForListDto>(userFromRepo);

            return Ok(new 
            {
                 token = tokenHandler.WriteToken(token),
                 user
                 });
        }
    }

}