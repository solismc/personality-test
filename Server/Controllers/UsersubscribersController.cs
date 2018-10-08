using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using personality_test.Models;

namespace personality_test.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UsersubscribersController : ControllerBase
    {
        public object Subscribers { get; private set; }
        public ActionResult<Subscribers> Usersubscribers { get; private set; }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Subscribers>> Get()
        {
            var db = new usersubscribersContext();

            return db.SubscribersTable;
        }

        [HttpPost]
        public ActionResult<Subscribers> Post([FromBody] Subscribers subscribers)
        {
            var db = new usersubscribersContext();

            db.SubscribersTable.Add(subscribers);

            db.SaveChanges();

            return subscribers;

        }
    }
}