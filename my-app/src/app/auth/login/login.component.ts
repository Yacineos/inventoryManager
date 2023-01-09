import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword: boolean = false;
  password: string = '';
  public router1: Router;
  @Output() toggleSignup = new EventEmitter();

  constructor(private router: Router, private rootComponent: AppComponent){
    this.router1=router;
  }
  ngOnInit() {
    // Clear the password field when the component is initialized
    this.password = '';
  }
  onLogin() {
    this.rootComponent.loggedIn = true;
    this.router.navigate(['/dashboard']);
  }
}
