import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { v4 as uuid } from 'uuid';

import { environment } from 'src/environments/environment.development';
import { Status, ToDo } from '../interfaces/todos.interface';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public apiUrl:string = environment.apiUrl;

  public storageTasks: ToDo[] = [];

  constructor(private http:HttpClient) {}

  public getToDosByStatus(status:string):ToDo[] {
    return this.storageTasks.filter(storageTasks => storageTasks.status === status);
  }

  public addTask(task: ToDo): void {
    this.storageTasks.push({id: uuid(), dateInitTodo: new Date(), ...task})
    
  }

  public removeAllToDos():void {
    this.storageTasks.forEach(storageTasks => storageTasks.status = 'removed');

  }

  public removeToDo(id: string): void {
    this.storageTasks.forEach(storageTasks => {
      if (storageTasks.id === id) {
        storageTasks.status = 'removed'
      }
    });

  }

  public updateToDo(todo:any): void {
    console.log('- updateToDo: ', todo);
  
    this.storageTasks.forEach(itemTodo => {
      console.log(itemTodo);
      
      if (todo.id == itemTodo.id) itemTodo.status = todo.status;

    });

  }

  public updateAllToDos(status:Status): void {
    console.log('- updateAllToDos()');
    this.storageTasks.forEach(itemTodo => {
      
      if (itemTodo.status == 'removed' && status === 'end') return;
      
      itemTodo.status = status;
    });

  }

  public resetToDos(): void {
    this.storageTasks = [];
  }
}
