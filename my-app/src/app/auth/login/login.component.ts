import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword: boolean = false;
  password: string = '';
  @Output() toggleSignup = new EventEmitter();
  
  ngOnInit() {
    // Clear the password field when the component is initialized
    this.password = '';
  }
}
