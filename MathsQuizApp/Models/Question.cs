using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MathsQuizApp.Models
{
    public class Question
    {
        public int questionNo { get; set; }
        public int operand1 { get; set; }
        public int operand2 { get; set; }
        public string @operator { get; set; }
        public int answer { get; set; }
    };
}