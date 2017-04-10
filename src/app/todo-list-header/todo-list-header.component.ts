import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
// Dumb component. Does not know about TodoDataService
// Emits events (that are handled by AppComponent)
export class TodoListHeaderComponent {
  // add's event payload (can (SHOULD) be accessed in handlers via $event arg.)
  newTodo: Todo = new Todo();

  // This event is handled by AppComponent
  @Output() 
  add: EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }

  // This method is called from todo-list-header-component.html
  // It emits the add event of TodoListHeaderComponent
  addTodo(): void {
    // Every time we call add.emit(this.newTodo), the onAddTodo($event) handler
    // in app.component.html will be called and $event will be equal to this.newTodo.
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
