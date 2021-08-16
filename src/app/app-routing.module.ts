import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './commons/pagenotfound/page-not-found/page-not-found.component';
import { LoginCanActivateGuard } from './login/login-can-activate.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginCanActivateGuard]
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'applicationDashboard',
    component: ApplicationDashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 
  constructor() {
    console.log("AppRoutingModule Loaded");
  }
}
