import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status, ToDo } from '../../../interfaces/todos.interface';

@Component({
  selector: 'task-lists',
  templateUrl: './list-tasks.component.html'
})
export class TasksListsComponent {

  public username:string = 'Aarón';


  @Input()
  public newTodos: ToDo[] = [];

  @Input()
  public endTodos: ToDo[] = [];

  @Input()
  public removedTodos: ToDo[] = [];

  @Output()
  public onRemoveTodo: EventEmitter<string> = new EventEmitter();

  @Output()
  public onRemoveAll: EventEmitter<string> = new EventEmitter();

  @Output()
  public onUpdateToDo: EventEmitter<{id: string, status: string}> = new EventEmitter();

  @Output()
  public onUpdateAll: EventEmitter<Status> = new EventEmitter();

  @Output()
  public onReset: EventEmitter<null> = new EventEmitter();


  removeToDo(id?: string): void {
    if (!id) return;
    this.onRemoveTodo.emit(id);
  }

  removeAllToDo(): void {
    this.onRemoveAll.emit();
  }

  updateAllToDo(status:Status): void {
    this.onUpdateAll.emit(status);
  }

  updateStatusTodo(id: string, status: string): void {
    console.log(id, status);
    
    if (!id || !status) return;
    this.onUpdateToDo.emit({id, status});
  }

  resetToDos() {
    this.onReset.emit();
  }
}
