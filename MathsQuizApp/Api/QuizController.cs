using MathsQuizApp.Models;
using MathsQuizApp.Services;
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
        public IEnumerable<Question> GetQuiz([FromBody]Settings settings)
        {
            List<Question> questions = new List<Question>();

            Random random = new Random();

            var numberOfQuestions = (settings != null) ? settings.NumberOfQuestions : 10;
            var level = (settings != null) ? settings.Level : 1;

            List<IQuestionGenerator> questionGenerators = new List<IQuestionGenerator>();
            questionGenerators.Add(new AdditionQuestionGenerator());
            questionGenerators.Add(new SubtractionQuestionGenerator());
            questionGenerators.Add(new MultiplicationQuestionGenerator());
            questionGenerators.Add(new DivisionQuestionGenerator());

            for (var i = 0; i < numberOfQuestions; i++)
            {
                var maxIndex = (level > 4) ? 4 : level;
                var selectedGenerator = random.Next(0, maxIndex); //Generates int that is greater than or equal to 0 and less than maxIndex; 

                Question newQuestion = questionGenerators[selectedGenerator].GenerateQuestion(level);
                newQuestion.questionNo = i + 1;
                questions.Add(newQuestion);
            }

            return questions;
        }

    }
}