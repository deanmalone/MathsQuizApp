using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MathsQuizApp.Models;

namespace MathsQuizApp.Services
{
    public class DivisionQuestionGenerator : IQuestionGenerator
    {
        Random random = new Random();

        public Question GenerateQuestion(int level)
        {
            // generate random equation
            var op2 = random.Next(1, 12);
            var result = random.Next(1, 12);
            var op1 = op2 * result;

            Question newQuestion = new Question();
            newQuestion.operand1 = op1;
            newQuestion.operand2 = op2;
            newQuestion.@operator = "÷";  // Alt 246
            newQuestion.answer = result;

            return newQuestion;
        }
    }
}