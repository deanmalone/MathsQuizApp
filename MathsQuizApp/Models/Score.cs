using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MathsQuizApp.Models
{
    public class Score
    {
        public int ID { get; set; }
        public int score { get; set;}
        public string name { get; set; }
        public DateTime date { get; set; }
    }
}
