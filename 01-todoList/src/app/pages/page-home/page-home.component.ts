import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Status, ToDo } from 'src/app/interfaces/todos.interface';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html'
})
export class PageHomeComponent {
  public username: string = 'Aarón';

  constructor(private tasksService: TasksService){}

  public get newTodos(): ToDo[] {
    return this.tasksService.getToDosByStatus('new');
  }
  public get endTodos(): ToDo[] {
    return this.tasksService.getToDosByStatus('end');
  }

  public get removedTodos(): ToDo[] {
    return this.tasksService.getToDosByStatus('removed');
  }

  addToDo(todo:string): void {
    let newTodo:ToDo = {
      userId: '',
      nameTodo: todo,
      status: 'new'
    }

    this.tasksService.addTask(newTodo);
  }

  removeToDo(id: string): void {
    this.tasksService.removeToDo(id);
  }

  removeToDoAll(): void {
    this.tasksService.removeAllToDos();
  }

  updateToDo(todo:any): void {
    console.log(todo);
    
    this.tasksService.updateToDo({...todo});
  }

  updateAllTodos(status:Status): void {
    this.tasksService.updateAllToDos(status);
  }

  resetAll(): void {
    this.tasksService.resetToDos();
  }
}
