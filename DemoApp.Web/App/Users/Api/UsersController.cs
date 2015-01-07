using System.Runtime.InteropServices;
using DemoApp.Data.Ef;
using DemoApp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DemoApp.Web.App.Users.Api
{
    public class UsersController : ApiController
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: api/Users/GetUsers
        [HttpGet]
        public HttpResponseMessage GetUsers(string sort, string filter)
        {
            var results = _userService.GetUsers();
            return Request.CreateResponse(HttpStatusCode.OK, results);
        }

        // GET: api/Users/GetUsers/ID
        [HttpGet]
        public HttpResponseMessage GetUser(Guid id)
        {
            var results = _userService.GetUser(id);
            return Request.CreateResponse(HttpStatusCode.OK, results);
        }

        // PUT: Insert and Update   
        [HttpPut]
        public HttpResponseMessage UpdateUser(User user)
        {
            if (user.UserId == Guid.Empty)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            _userService.UpdateUser(user);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST: Insert  
        [HttpPost]
        public HttpResponseMessage InsertUser([FromBody]User user)
        {
            if (user == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
          
            _userService.InsertUser(user);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // DELETE:
        [HttpDelete]
        public HttpResponseMessage DeleteUser(Guid id)
        {
            if (id == Guid.Empty)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            _userService.DeleteUser(id);
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
