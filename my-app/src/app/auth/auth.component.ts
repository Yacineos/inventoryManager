import { Component } from '@angular/core';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  showLogin = true;
  showSignUp = false;

  toggleSignup() {
    this.showLogin = false;
    this.showSignUp = true;
  }
  toggleLogin(){
    this.showLogin = true;
    this.showSignUp = false;
  }
}
