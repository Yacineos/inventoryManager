import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { EmployeeService } from '../employees/employee.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  eligible: boolean = false;
  constructor(private employeeService:EmployeeService,private authService:AuthService,private router :Router ) { }
  ngOnInit(): void {
    const role = this.employeeService.getEmployeeRole(this.authService.currentUserId);
    role.subscribe((value: number) => {
      this.eligible = this.authService.isLoggedIn()&&(value < 3);
    }
    );
    
  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.authService.currentUser = null;
    this.authService.currentUserId = 0;
    console.log(this.authService.currentUser);
    this.router.navigate(['/']);
  }

}
