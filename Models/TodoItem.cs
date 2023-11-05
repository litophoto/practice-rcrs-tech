using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Data;
namespace todo_react_app.Models;

public class TodoItem
{
    [Key]
    [Column("id")]
    public int Id{get;set;}
    [Column("content")]
    public string Content{get;set;}
    [Column("is_finished")]
    public Boolean IsCompleted{get;set;}
    [Column("is_deleted")]
    public Boolean IsDeleted{get;set;}
    [Column("time")]
    public DateTime Time {get;set;}
}
