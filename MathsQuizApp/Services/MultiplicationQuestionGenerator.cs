using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MathsQuizApp.Models;

namespace MathsQuizApp.Services
{
    public class MultiplicationQuestionGenerator : IQuestionGenerator
    {
        Random random = new Random();

        public Question GenerateQuestion(int level)
        {
            // generate random equation
            var op1 = random.Next(1, 12);
            var op2 = random.Next(1, 12);
            var result = op1 * op2;

            Question newQuestion = new Question();
            newQuestion.operand1 = op1;
            newQuestion.operand2 = op2;
            newQuestion.@operator = "×";  // Alt 0215
            newQuestion.answer = result;

            return newQuestion;
        }
    }
}