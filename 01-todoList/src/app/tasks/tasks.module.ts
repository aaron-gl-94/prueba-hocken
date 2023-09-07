import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksListsComponent } from './components/list-tasks/list-tasks.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

@NgModule({
  declarations: [
    TasksListsComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksListsComponent,
    NewTaskComponent
  ]
})
export class TasksModule { }
