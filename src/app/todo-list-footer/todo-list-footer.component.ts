import { Component, Input } from '@angular/core';
import { Todo } from 'app/todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
// Dumb component. Does not know about TodoDataService.
// We don't need methods here
export class TodoListFooterComponent {

  @Input()
  todos: Todo[]

  constructor() { }

}
