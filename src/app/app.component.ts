import { Component } from '@angular/core';
// Import class so we can use it as dependency injection token in the constructor
import { TodoDataService } from './todo-data.service';
import { Todo } from "app/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Smart component. Knows about TodoDataService
// Handles events emitted by TodoListHeaderComponet, TodoListComponent
export class AppComponent {

  // No longer needed, now handled by TodoListHeaderComponent
  // newTodo: Todo = new Todo();
  
  // Ask angular DI system to inject the dependency
  // associated with the dependency injection token 'TodoDataService'
  // and assign it to a property called 'todoDataService'
  constructor(private todoDataService: TodoDataService) { }
  
  // In this class we delegate all business logic to todoDataService
  // This makes testing a lot easier

  // No longer needed, now handled by TodoListHeaderComponent
  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  // Method to handle event emitted by TodoListHeaderComponent
  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  // rename from toggleTodoComplete
  // called when TodoListComponent's toggleComplete event emitted 
  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  // rename from removeTodo
  // called when TodoListComponent's remove event emitted
  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  // In outer code this is seen as a prop, not method
  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
