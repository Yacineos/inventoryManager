import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from '../auth.service';
import { CommandeService } from 'src/app/sell/commande/commande.service';
import { EmployeeService } from 'src/app/employees/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword: boolean = false;
  password: string = '';
  identifiant: number = 0;
  public router1: Router;
  @Output() toggleSignup = new EventEmitter();

  constructor(private employeeService:EmployeeService ,private commandeService:CommandeService,private router: Router, private rootComponent: AppComponent , private http: HttpClient , private authService:AuthService) {
    this.router1=router;
  }
  ngOnInit() {
    // Clear the password field when the component is initialized
    this.password = '';
    this.rootComponent.loggedIn = false;
  }
  onLogin() {
    const body = { idEmployee: this.identifiant, password: this.password };
    console.log(body);
    this.http.post('http://localhost:8080/login', body).subscribe((data :any) => {
      console.log(data);
      if (data && data.success) {
        this.rootComponent.loggedIn = true;
        this.authService.currentUser = body;
        this.authService.currentUserId = body.idEmployee;
        localStorage.setItem('currentUser', JSON.stringify(body.idEmployee));
        this.commandeService.addCommande(body.idEmployee,17).subscribe((data:any)=>{
          console.log(data);
          this.router.navigate(['/sell']);
        }
        );
        
      } else {
        alert('Wrong username or password');
      }
    }
    );
  }
}
