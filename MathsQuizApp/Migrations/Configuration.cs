namespace MathsQuizApp.Migrations
{
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MathsQuizApp.Data.QuizContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "MathsQuizApp.Data.QuizContext";
        }

        protected override void Seed(MathsQuizApp.Data.QuizContext context)
        {
            //  This method will be called after migrating to the latest version.

            //var scores = new List<Score>()
            //{
            //    new Score() { score = 17, name = "Nicole", date = DateTime.Parse("2016-08-11T13:32:00") },
            //    new Score() { score = 19, name = "Jacqueline", date = DateTime.Parse("2016-08-09T15:31:00") },
            //    new Score() { score = 18, name = "Harry", date = DateTime.Parse("2016-03-11T12:00:00") },
            //    new Score() { score = 19, name = "Sarah Jane", date = DateTime.Parse("2016-08-09T15:31:01") },
            //    new Score() { score = 16, name = "Amanda", date = DateTime.Parse("2016-08-14T15:30:01") },
            //    new Score() { score = 15, name = "Sean", date = DateTime.Parse("2016-07-25T12:00:00") },
            //    new Score() { score = 14, name = "Melissa", date = DateTime.Parse("2016-06-25T12:00:00") },
            //    new Score() { score = 13, name = "Sarah", date = DateTime.Parse("2016-03-28T12:00:00") },
            //    new Score() { score = 12, name = "Ann", date = DateTime.Parse("2016-05-25T12:00:00") },
            //    new Score() { score = 11, name = "Daniel", date = DateTime.Parse("2016-06-30T12:00:00") }
            //};

            //scores.ForEach(s => context.Scores.AddOrUpdate(s));
            //context.SaveChanges();

        }
    }
}
