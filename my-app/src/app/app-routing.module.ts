import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCostumerComponent } from './add-costumer/add-costumer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ErrorComponent } from './error/error.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SellComponent } from './sell/sell.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path:"",component:AuthComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"error",component:ErrorComponent},
  {path:"fournisseurs",component:FournisseursComponent,canActivate:[AuthGuard]},
  {path:"customers",component:CustomersComponent,canActivate:[AuthGuard]},
  {path:"inventory",component:InventoryComponent,canActivate:[AuthGuard]},
  {path:"settings",component:SettingsComponent,canActivate:[AuthGuard]},
  {path:"test",component:AddProductComponent},
  {path:"sell",component:SellComponent,canActivate:[AuthGuard]},
  {path:"employees",component:EmployeesComponent, canActivate:[AuthGuard]},
  {path:"**",redirectTo:'error', pathMatch:"full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
