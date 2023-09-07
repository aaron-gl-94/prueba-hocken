import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PageTest1Component } from '../pages/page-test1/page-test1.component';
import { PageTest2Component } from '../pages/page-test2/page-test2.component';
import { PageTest3Component } from '../pages/page-test3/page-test3.component';
import { PageTest4Component } from '../pages/page-test4/page-test4.component';
import { PageTest5Component } from '../pages/page-test5/page-test5.component';
import { Page404Component } from '../pages/page-404/page-404.component';
import { PageHomeComponent } from './page-home/page-home.component';

@NgModule({
  declarations: [
    PageTest1Component,
    PageTest2Component,
    PageTest3Component,
    PageTest4Component,
    PageTest5Component,
    Page404Component,
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    PageTest1Component,
    PageTest2Component,
    PageTest3Component,
    PageTest4Component,
    PageTest5Component
  ]
})
export class PagesModule { }
