import { Injectable } from '@angular/core';
interface Todo {
  id: number;
  text: string;
}
@Injectable({
  providedIn: 'root'
})
export class ToDoService {  

private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todoText: string): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      text: todoText,      
    };
    this.todos.push(newTodo);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}

