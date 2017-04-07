import { TestBed, inject } from '@angular/core/testing';
import { Todo } from './todo';

import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {
    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Hello 3', complete: true});
      let todo2 = new Todo({title: 'Hello 4', complete: false});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.lastId).toEqual(2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));
  });

  describe('#deleteTodoById(id)', () => {
    it('should delete all todos with selected ids', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Buy some beer', complete: true});
      let todo2 = new Todo({title: 'Watch movie or smth', complete: false});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('shouldn\'t remove anything if corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Buy some beer', complete: true});
      let todo2 = new Todo({title: 'Watch movie or smth', complete: false});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(5);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(-2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#updateTodoById(id, values)', () => {
    it('should return todo with corresponding id and provided data', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({title: 'Save the world', complete: true});
      service.addTodo(todo);
      let str = 'Top lel';
      service.updateTodoById(1, {
        title: str,
        complete: false
      });
      expect(service.getTodoById(1).title).toEqual(str);
      expect(service.getTodoById(1).complete).toEqual(false);

    }));

    it('should return null if todo isn\'t found', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({title: 'Save the world', complete: true});
      service.addTodo(todo);
      expect(service.updateTodoById(-1, {})).toEqual(null);
    }));
  });

  describe('#toggleTodoComplete(id, values)', () => {
    it('should toggle complete property of given todo', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({title: 'Save the world', complete: true});
      // TODO delete the line below & see results
      service.addTodo(todo);
      service.toggleTodoComplete(todo);
      expect(todo.complete).toEqual(false);
      // There's no need to store toggleTodoComplete(todo) result in var
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
    }));
  });
});
