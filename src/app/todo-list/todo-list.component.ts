import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
// Dumb component. Does not know about TodoDataService.
// Re-emits events from TodoListItemComponent (that are handled by AppComponent)
export class TodoListComponent {
  // Input from AppComponent
  @Input()
  todos: Todo[];

  // These events are handled by AppComponent
  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  constructor() { }
  
  // Called when TodoListItemComponent's toggleComplete event emitted
  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  // Called when TodoListItemComponent's remove event emitted
  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
