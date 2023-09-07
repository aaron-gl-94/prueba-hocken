import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page404Component } from './pages/page-404/page-404.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageTest1Component } from './pages/page-test1/page-test1.component';
import { PageTest2Component } from './pages/page-test2/page-test2.component';
import { PageTest3Component } from './pages/page-test3/page-test3.component';
import { PageTest4Component } from './pages/page-test4/page-test4.component';
import { PageTest5Component } from './pages/page-test5/page-test5.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'test-1', component: PageTest1Component },
  { path: 'test-2', component: PageTest2Component },
  { path: 'test-3', component: PageTest3Component },
  { path: 'test-4', component: PageTest4Component },
  { path: 'test-5', component: PageTest5Component },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
