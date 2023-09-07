import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Page404Component } from './page-404/page-404.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageLogoutComponent } from './page-logout/page-logout.component';

import { TasksModule } from '../tasks/tasks.module';

@NgModule({
  declarations: [
    PageLoginComponent,
    PageLogoutComponent,
    PageHomeComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    TasksModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PageLoginComponent,
    PageLogoutComponent,
    PageHomeComponent,
    Page404Component
  ]
})
export class PagesModule { }
