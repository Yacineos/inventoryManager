import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  public employees: Employee[] =[];

  constructor(private employeeService: EmployeeService){

  }

  ngOnInit(): void {
      this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (Response: Employee[])=> {
        this.employees = Response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
