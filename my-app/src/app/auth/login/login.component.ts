import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public visiblePassword() {
    const passwordField = document.getElementById(
      'password'
    ) as HTMLInputElement;
    const toggleButton = document.getElementById('toggle-password-visibility');
    if(toggleButton != null)
    toggleButton.addEventListener('click', () => {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
    });
  }
}
