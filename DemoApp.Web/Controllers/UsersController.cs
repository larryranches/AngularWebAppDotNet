using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DemoApp.Domain.Services;
using DemoApp.Data.Ef;


namespace DemoApp.Web.Controllers
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
        public HttpResponseMessage GetUsers()
        {
            var results = _userService.GetUsers();
            return Request.CreateResponse(HttpStatusCode.OK, results);
        }

        //// GET: api/Users/GetUsers/ID
        //[HttpGet]
        //public HttpResponseMessage GetUser(Guid id)
        //{
        //    var results = _userService.GetUser(id);
        //    return Request.CreateResponse(HttpStatusCode.OK, results);
        //}

        // PUT: Insert and Update     
        public HttpResponseMessage UpdateUser(Guid id, User user)
        {
            if (!ModelState.IsValid || id != user.UserId)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            //var user = new User();

            _userService.UpdateUser(id, user);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST: Insert    
        public HttpResponseMessage InsertUser(User user)
        {
            //if (!ModelState.IsValid || id != user.UserId)
            //{
            //    return Request.CreateResponse(HttpStatusCode.BadRequest);
            //}

           // var user = new User();

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





        //// GET: api/Users
        //[HttpGet]
        //public HttpResponseMessage GetUser(Guid iD)
        //{
        //    var results = _dataProvider.GetById(iD);
        //    return Request.CreateResponse(HttpStatusCode.OK, results);
        //}






        //private DemoAppEntities db = new DemoAppEntities();

        //// GET: api/Users
        //public IQueryable<User> GetUsers()
        //{
        //    return db.Users;
        //}

        //// GET: api/Users/5
        //[ResponseType(typeof(User))]
        //public async Task<IHttpActionResult> GetUser(Guid id)
        //{
        //    User user = await db.Users.FindAsync(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(user);
        //}

        // PUT: api/Users/5
        //[ResponseType(typeof(void))]
        //public async Task<IHttpActionResult> PutUser(Guid id, User user)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != user.UserId)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(user).State = EntityState.Modified;

        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!UserExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/Users
        //[ResponseType(typeof(User))]
        //public async Task<IHttpActionResult> PostUser(User user)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Users.Add(user);

        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (UserExists(user.UserId))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtRoute("DefaultApi", new { id = user.UserId }, user);
        //}

        //// DELETE: api/Users/5
        //[ResponseType(typeof(User))]
        //public async Task<IHttpActionResult> DeleteUser(Guid id)
        //{
        //    User user = await db.Users.FindAsync(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Users.Remove(user);
        //    await db.SaveChangesAsync();

        //    return Ok(user);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool UserExists(Guid id)
        //{
        //    return db.Users.Count(e => e.UserId == id) > 0;
        //}
    }
}