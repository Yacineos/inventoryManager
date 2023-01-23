import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from "./auth/login/login.component";
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ErrorComponent } from './error/error.component';
import { CustomersComponent } from './customers/customers.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SettingsComponent } from './settings/settings.component';
import { AddCostumerComponent } from './add-costumer/add-costumer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { SellComponent } from './sell/sell.component';
import { CartComponent } from './sell/cart/cart.component';


@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        LoginComponent,
        SignUpComponent,
        EmployeeComponent,
        DashboardComponent,
        SideBarComponent,
        ErrorComponent,
        CustomersComponent,
        InventoryComponent,
        SettingsComponent,
        AddCostumerComponent,
        AddProductComponent,
        DeleteConfirmationComponent,
        SellComponent,
        CartComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
    ]
})
export class AppModule { }
