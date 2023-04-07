import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeesComponent } from '../employees.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
    public idE: number=0;
    public password: string='';
    public showPassword: boolean = false;
    constructor(private employeeComponent:EmployeesComponent, private employeeService:EmployeeService) { }
  
    ngOnInit() {
    }
    addEmployeeAuth() {

        this.employeeService.addEmployee(this.idE,this.password).subscribe();
        this.hideAddEmployee(); 
        this.employeeService.getAllEmployees().subscribe(data => {
          this.employeeComponent.employees = data;
          window.location.reload();
        }
        );
    }
    hideAddEmployee() {
      //this.employeesComponent.hideAllEmployees();
      this.employeeComponent.showAddEmployee = false;
    }
}
