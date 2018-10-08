using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using personality_test.Models;

namespace personality_test.Controllers
{
    [Route("api/[personality-test]")]
    [ApiController]
    public class UsersubscriberContext : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<SubscribersTable>> Get()
        {
            var db = new SubscribersTableContext (); 
            return db.SubscribersTable;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<SubscribersTable> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
            var Subscriber = new  {
                FirstName = FirstName,
                LastName = LastName,
                EmailAdress = EmailAddress,
        };
            var db = new SubscribersTableContext();

            db.Usersubscriber.Add(Subscriber);

            db.SaveChanges();

            return Subscriber;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
