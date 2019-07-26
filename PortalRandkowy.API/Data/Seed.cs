using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace PortalRandkowy.API.Data {
    public class Seed {
        private readonly DataContext _context;

        public Seed (DataContext context) {
            _context = context;

        }

        public void SeedUsers () {
            Console.WriteLine ("--------------------------------------------------------------------------");
            Console.WriteLine ("Seed wystartowalo");
            if (!_context.Users.Any ()) {
                Console.WriteLine ("--------------------------------------------------------------------------");
                Console.WriteLine ("Brak rekordow");
                var userData = File.ReadAllText ("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<Models.User>> (userData);

                foreach (var user in users) {
                    Console.WriteLine ("--------------------------------------------------------------------------");
                    Console.WriteLine (user.Username);

                    byte[] passwordHash, passwordSalt;
                    CreatePasswordHashSalt ("password", out passwordHash, out passwordSalt);
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower ();
                    _context.Users.Add (user);

                }
                _context.SaveChanges();
            }

        }

        private void CreatePasswordHashSalt (string password, out byte[] passwordHash, out byte[] passwordSalt) {
            using (var hmac = new System.Security.Cryptography.HMACSHA512 ()) {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash (Encoding.UTF8.GetBytes (password));

            }
        }

    }
}