import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Employee } from './employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employee: Employee= {
    idE: 0,
    nom: '',
    prenom: '',
    email: '',
    nTel: '',
    nomUtilisateur: '',
    motDePasse: '',
    numRue: 0,
    nomRue: '',
    codePostal: 0,
    ville: '',
  };
  employees: Employee[] = [];
  showAddEmployee: boolean = false;
  activeEmployeesNumber: number = 0;
  inactiveEmployeesNumber: number = 0;
  newEmployeesNumber: number = 0;
  searchInput: string = '';
  isChecked: boolean = false;
  p: number = 1;
  orderStatus: boolean = false;
  constructor(private rootComponent:AppComponent ,private http: HttpClient) { 
    this.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  ngOnInit(): void {
    this.rootComponent.loggedIn = true;
  }
  showAddEmployeeForm() {
    this.showAddEmployee = true;
  }
  getAllEmployees(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/employee/all');
  }
  getEmployeeOrderedByNameAsc(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/employee/all/nameAsc');
  }
  getEmployeeOrderedByNameDesc(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/employee/all/nameDesc');
  }
  getEmployeeOrderedByEmailAsc(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/employee/all/emailAsc');
  }
  getEmployeeOrderedByEmailDesc(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/employee/all/emailDesc');
  }
  findEmployeesByInput(): void {
     this.http.get<any>('http://localhost:8080/employee/findEmployees/'+this.searchInput).subscribe(data => {
      this.employees = data;
      });

  } 
  nameOnClick() {
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus) {
      this.getEmployeeOrderedByNameAsc().subscribe(data => {
        this.employees = data;
      });
    } else {
      this.getEmployeeOrderedByNameDesc().subscribe(data => {
        this.employees = data;
      });
    }
  }
  emailOnClick() {
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus) {
      this.getEmployeeOrderedByEmailAsc().subscribe(data => {
        this.employees = data;
      });
    } else {
      this.getEmployeeOrderedByEmailDesc().subscribe(data => {
        this.employees = data;
      });
    }
  }
  deleteEmployee(id: number) {
    this.http.delete('http://localhost:8080/employee/delete/'+id).subscribe();
    this.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }


}
