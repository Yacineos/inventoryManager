import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCostumerComponent } from './add-costumer/add-costumer.component';
import { AuthComponent } from './auth/auth.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path:"",component:AuthComponent},
  {path:"employees",component:EmployeeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"error",component:ErrorComponent},
  {path:"customers",component:CustomersComponent},
  {path:"inventory",component:InventoryComponent},
  {path:"settings",component:SettingsComponent},
  {path:"test",component:AddCostumerComponent},
  {path:"**",redirectTo:'error', pathMatch:"full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
