import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword: boolean = false;
  password: string = '';
  username: string = '';
  public router1: Router;
  @Output() toggleSignup = new EventEmitter();

  constructor(private router: Router, private rootComponent: AppComponent , private http: HttpClient , private authService:AuthService) {
    this.router1=router;
  }
  ngOnInit() {
    // Clear the password field when the component is initialized
    this.password = '';
    this.rootComponent.loggedIn = false;
  }
  onLogin() {
    const body = { username: this.username, password: this.password };
    console.log(body);
    this.http.post('http://localhost:8080/login', body).subscribe((data :any) => {
      console.log(data);
      if (data && data.success) {
        this.rootComponent.loggedIn = true;
        this.authService.currentUser = body;
        this.authService.currentUserName = body.username;
        localStorage.setItem('currentUser', JSON.stringify(body.username));
        this.router.navigate(['/dashboard']);
      } else {
        alert('Wrong username or password');
      }
    }
    );
  }
}
