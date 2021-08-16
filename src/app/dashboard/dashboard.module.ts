import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../commons/header/header.component';
import { LoginComponent } from '../login/login.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { ApplicationDashboardComponent } from '../application-dashboard/application-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { SharedMaterialModule } from '../commons/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    ApplicationDashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    AdminDashboardComponent,
    ApplicationDashboardComponent,
    LoginComponent
  ],
})
export class DashboardModule { 
  constructor() {
    console.log("Dashboard Module Loaded");
  }
}
