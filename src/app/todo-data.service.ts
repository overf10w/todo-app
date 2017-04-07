import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;
  // Placeholder for todos
  todos: Todo[] = [];

  constructor() { }

  // Simulate Post /todos
  // TODO try to return void
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  // TODO try returning void
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
