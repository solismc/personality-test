using Microsoft.EntityFrameworkCore.Migrations;

namespace personality_test.Migrations
{
    public partial class Addusersubscribers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FistName",
                table: "SubscribersTable",
                newName: "FirstName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "SubscribersTable",
                newName: "FistName");
        }
    }
}
