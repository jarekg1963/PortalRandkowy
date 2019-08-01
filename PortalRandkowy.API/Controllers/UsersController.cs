using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PortalRandkowy.API.Data;
using PortalRandkowy.API.Dtos;

namespace PortalRandkowy.API.Controllers {
    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase {

        public readonly IUserRepository _repo;
        private readonly IMapper _mapper;

        public UsersController (IUserRepository repo, IMapper mapper) {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers () {

           
                throw new Exception ("Reczny wyjatek w kontrolerze users");
                var users = await _repo.GetUsers ();
                var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>> (users);
                return Ok (usersToReturn);

         

        }

        [HttpGet ("{id}")]
        public async Task<IActionResult> GetUser (int id) {
            var user = await _repo.GetUser (id);

            var userToReturn = _mapper.Map<UserForDetailsDto> (user);
            return Ok (userToReturn);
        }

    }
}