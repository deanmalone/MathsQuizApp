using MathsQuizApp.Data;
using MathsQuizApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MathsQuizApp.Api
{
    public class ScoresController : ApiController
    {
        private QuizContext db = new QuizContext();

        [HttpPost]
        public void PostScore([FromBody]Score score)
        {
            // store score in database
            db.Scores.Add(score);
            db.SaveChanges();
        }


        // GET api/<controller>
        public IEnumerable<Score> Get()
        {
            return db.Scores.ToList();
        }

    }
}