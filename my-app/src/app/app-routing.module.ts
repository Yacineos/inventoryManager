import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path:"",component:AuthComponent},
  {path:"employees",component:EmployeeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"error",component:ErrorComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
