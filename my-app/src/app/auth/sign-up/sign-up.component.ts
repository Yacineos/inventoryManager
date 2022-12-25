import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  showPassword: boolean = false;
  password: string = '';
  @Output() toggleLogin = new EventEmitter();
  ngOnInit() {
    // Clear the password field when the component is initialized
    this.password = '';
  }
}
