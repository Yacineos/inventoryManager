import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeesComponent } from '../employees.component';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent {

  employee: Employee= {
    idE: 0,
    name: '',
    prenom: '',
    email: '',
    nTel: 0,
    nomUtilisateur: '',
    motDePasse: '',
    numRue: 0,
    nomRue: '',
    codePostal: 0,
    ville: '',
  };

  constructor(private employeeComponent:EmployeesComponent, private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee = this.employeeComponent.employee;
  }
  hideModifyEmployee() {
    this.employeeComponent.showModifyEmployee = false;
  }
  modifyEmployee(){
    this.employeeService.modifyEmployee(this.employee);
    this.hideModifyEmployee();
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employeeComponent.employees = data;
    }
    );
  }

}
