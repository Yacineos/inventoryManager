import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { EmployeeService } from '../employees/employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private employeeService:EmployeeService,private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log("what is being fed : "+this.authService.currentUserId);
    const role = this.employeeService.getEmployeeRole(this.authService.currentUserId);

    if (this.authService.isLoggedIn()) {
      role.subscribe((value: number) => {
        // Compare the value with your number
        if (value === 1) {
          // Admin logic
          return true;
        } else if (value === 2) {
          // Manager logic
          return true;
        } else {
          // Seller logic
          this.router.navigate(['/sell']);
          return true;
        }
      });
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
