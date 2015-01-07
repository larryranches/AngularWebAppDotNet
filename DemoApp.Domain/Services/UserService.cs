using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using DemoApp.Data.Ef;

namespace DemoApp.Domain.Services
{
    public class UserService : IUserService
    {         
        private readonly DemoAppEntities _db;
        public UserService(DemoAppEntities db)
        {
            _db = db;
        }       

        public List<User> GetUsers()
        {
            var get = _db.Users.OrderByDescending(a => a.ModifiedOn).ToList();
            return get;
        }

        public User GetUser(Guid id)
        {
            User user = _db.Users.Find(id);
            return user;
        }
      
        public void UpdateUser(User user)
        {                      
            _db.Users.AddOrUpdate(user);            
            _db.SaveChanges();                           
        }

        public void InsertUser(User user)
        {  
            if (user.UserId == Guid.Empty)
            {
                user.UserId = Guid.NewGuid();
                user.ModifiedOn = DateTime.Now;
            }
            _db.Users.Add(user);
            _db.SaveChanges();           

        }
        
        public void DeleteUser(Guid id)
        {
            User user = _db.Users.Find(id);
            if (user != null)
            {
                _db.Users.Remove(user);
                _db.SaveChangesAsync();
            }           
        }       
    }

    public interface IUserService
    {     
       List<User> GetUsers();
       User GetUser(Guid id);
       void UpdateUser(User user);
       void InsertUser(User user);
       void DeleteUser(Guid id);
    }
   
}
