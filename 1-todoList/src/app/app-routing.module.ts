import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageLogoutComponent } from './pages/page-logout/page-logout.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { PublicGuard } from './guards/public.guard';

const routes: Routes = [
  { path: '',  component: PageLoginComponent, },
  { path: 'login', component: PageLoginComponent, canActivate: [PublicGuard] },
  { path: 'logout', component: PageLogoutComponent, canActivate: [AuthGuard] },
  { path: 'home',   component: PageHomeComponent,  canActivate: [AuthGuard] },

  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
