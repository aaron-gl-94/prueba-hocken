import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'task-new',
  templateUrl: './new-task.component.html'
})
export class NewTaskComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public newToDo: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .subscribe(value => {
        console.log({ value });
        this.onDebounce.emit(value);
      })
  }

  ngOnDestroy(): void {
    console.log('- Searchbox destruido.');
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  addToDo(todo:string) {
    if (todo.length === 0) return;
    
    this.debouncer.next(todo);
  }
}
