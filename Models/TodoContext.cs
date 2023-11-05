using Microsoft.EntityFrameworkCore;
namespace todo_react_app.Models;

public class TodoContext: DbContext
{
    public DbSet<TodoItem> TodoItem { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(
            "Host=localhost;Port=5432;Username=postgres;Password=postgre;Database=mytodo_db"
        );
    }
}