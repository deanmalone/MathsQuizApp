using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MathsQuizApp.Api
{
    public class QuizController : ApiController
    {
        // POST api/<controller>
        [HttpPost]
        public IEnumerable<QuizQuestion> GetQuiz([FromBody]QuizSettings settings)
        {
            List<QuizQuestion> questions = new List<QuizQuestion>();

            Random random = new Random();

            var numberOfQuestions = (settings != null) ? settings.NumberOfQuestions : 10;

            for (var i = 0; i < numberOfQuestions; i++)
            {
                // generate random equation
                var op1 = random.Next(1, 20);
                var op2 = random.Next(1, 20);
                var result = op1 + op2;

                QuizQuestion newQuestion = new QuizQuestion();
                newQuestion.questionNo = i + 1;
                newQuestion.operand1 = op1;
                newQuestion.operand2 = op2;
                newQuestion.@operator = "+";
                newQuestion.answer = result;

                questions.Add(newQuestion);
            }

            return questions;
        }

    }
}