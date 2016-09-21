namespace MathsQuizApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Scores",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        score = c.Int(nullable: false),
                        name = c.String(),
                        date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Scores");
        }
    }
}
