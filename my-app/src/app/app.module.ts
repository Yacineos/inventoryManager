import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from "./auth/login/login.component";
import { SignUpComponent } from './auth/sign-up/sign-up.component';


@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        LoginComponent,
        SignUpComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        
    ]
})
export class AppModule { }
