import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from './employee/employee';
import { EmployeeService } from './employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn=true;
  title = 'my-app'; 
}
 