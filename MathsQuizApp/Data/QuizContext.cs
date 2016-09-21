using MathsQuizApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace MathsQuizApp.Data
{
    public class QuizContext : DbContext
    {
        public QuizContext() : base("QuizContext")
        {
        }

        public DbSet<Score> Scores { get; set; }

    }
}