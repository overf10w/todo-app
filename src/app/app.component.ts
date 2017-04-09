import { Component } from '@angular/core';
// Import class so we can use it as dependency injection token in the constructor
import { TodoDataService } from './todo-data.service';
import { Todo } from "app/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo = new Todo();
  
  // Ask angular DI system to inject the dependency
  // associated with the dependency injection token 'TodoDataService'
  // and assign it to a property called 'todoDataService'
  constructor(private todoDataService: TodoDataService) { }
  
  // In this class we delegate all business logic to todoDataService
  // This makes testing a lot easier
  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
  // In outer code this is seen as a prop, not method
  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
