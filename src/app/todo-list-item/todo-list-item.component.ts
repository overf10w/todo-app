import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
// Dumb component. Does not know about TodoDataService
// Emits events (that are handled by TodoListComponent)
export class TodoListItemComponent {
  // Input from TodoListComponent
  @Input()
  todo: Todo;
  
  // These events are handled by TodoListComponent
  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }
    
  // Called when user checks todo
  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  // Called when user removes todo
  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }  

}
