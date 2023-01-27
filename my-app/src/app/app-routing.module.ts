import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCostumerComponent } from './add-costumer/add-costumer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SellComponent } from './sell/sell.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path:"",component:AuthComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"error",component:ErrorComponent},
  {path:"customers",component:CustomersComponent},
  {path:"inventory",component:InventoryComponent},
  {path:"settings",component:SettingsComponent},
  {path:"test",component:AddProductComponent},
  {path:"sell",component:SellComponent},
  {path:"**",redirectTo:'error', pathMatch:"full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
