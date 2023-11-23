using System.Linq;
using System.Text.Json.Nodes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todo_react_app.Models;

namespace todo_react_app.Controllers;

public class TodoItemController:Controller
{
    private readonly TodoContext _context;

        public TodoItemController(TodoContext context)
        {
            _context = context;
        }

    [Route("/Api/AddTodoItem/")]
    [HttpPost]
    public ActionResult AddTodoItem([FromBody] string req)
    {
        Console.WriteLine(req);


        // _context.TodoItem.Add(todo);
        // _context.SaveChanges();
        return View(req);
    }

    [HttpPost]
    public ActionResult UpdateTodoItem(TodoItem todo)
    {
        //アップデート対象のアイテムを絞り込む
        var targetTodo = _context.TodoItem.Where(i => i.Id == todo.Id).FirstOrDefault();
        //todoの内容と日時を変更
        targetTodo.Content = todo.Content;
        targetTodo.Time = new DateTime();

        _context.TodoItem.Update(targetTodo);
        _context.SaveChanges();

        return RedirectToAction("UPDATE SUCCESS");
    }

    [Route("/Api/ReadAllTodoItems")]
    [HttpPost]
    public JsonResult ReadAllTodoItem()
    {
        var todoList = _context.TodoItem.OrderBy(o => o.Time).ToList();
        return Json(todoList);
    }

    [HttpPost]
    public ActionResult RemoveTodoItem(TodoItem todo)
    {
        var targetTodo = _context.TodoItem.Where(a=>a.Id==todo.Id).FirstOrDefault();
        _context.TodoItem.Remove(targetTodo);
        _context.SaveChanges();
        return RedirectToAction("REMOVE SUCCESS");
    }

    
}