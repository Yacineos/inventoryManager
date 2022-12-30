import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router){
    this.router1=router;
  }
  ngOnInit() {
    // Clear the password field when the component is initialized
    this.password = '';
  }
}
