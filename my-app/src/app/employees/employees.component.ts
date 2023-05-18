import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth/auth.service';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  currentUserId: number = 0;
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
    id_manager: 0
  };
  employees: Employee[] = [];
  showModifyEmployee: boolean = false;
  showAddEmployee: boolean = false;
  activeEmployeesNumber: number = 0;
  inactiveEmployeesNumber: number = 0;
  newEmployeesNumber: number = 0;
  searchInput: string = '';
  isChecked: boolean = false;
  p: number = 1;
  orderStatus: boolean = false;
  
  constructor(private rootComponent:AppComponent ,private http: HttpClient,private authService: AuthService, private employeeService: EmployeeService) { 
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  ngOnInit(): void {
    this.rootComponent.loggedIn = true;
    this.currentUserId = this.authService.currentUserId;
  }
  showAddEmployeeForm() {
    this.showAddEmployee = true;
  }
  showModifyEmployeeForm(employee: Employee) {
    this.employee = employee;
    this.showModifyEmployee = true;
  }
  nameOnClick() {
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus) {
      this.employeeService.getEmployeeOrderedByNameAsc().subscribe(data => {
        this.employees = data;
      });
    } else {
      this.employeeService.getEmployeeOrderedByNameDesc().subscribe(data => {
        this.employees = data;
      });
    }
  }
  emailOnClick() {
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus) {
      this.employeeService.getEmployeeOrderedByEmailAsc().subscribe(data => {
        this.employees = data;
      });
    } else {
      this.employeeService.getEmployeeOrderedByEmailDesc().subscribe(data => {
        this.employees = data;
      });
    }
  }
  findEmployeesByInput() {
    if(this.searchInput == '' || this.searchInput == null) {
      this.employeeService.getAllEmployees().subscribe(data => {
        this.employees = data;
      });
    } 
    else {
    this.employeeService.findEmployeesByInput(this.searchInput).subscribe(data => {
      this.employees = data;
    });
  }
  }
  deleteEmployee(id: number) : void{
    this.employeeService.deleteEmployee(id);
    console.log("Employee "+id+" deleted");
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    }
    );
  }

}
