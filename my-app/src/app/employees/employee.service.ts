import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";

@Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {
  
    private employeesUrl = 'http://localhost:8080/employee';
    employee: Employee = {
        idE: 0,
        name: '',
        prenom: '',
        email: '',
        nomUtilisateur: '',
        motDePasse: '',
        nTel: 0,
        numRue: 0,
        nomRue: '',
        codePostal: 0,
        ville: '',
        };
    constructor(private http: HttpClient) { }
    getAllEmployees(): Observable<any> {
        return this.http.get<Employee[]>(`${this.employeesUrl}/all`);
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
      findEmployeesByInput(searchInput:string): Observable<any> {
         return this.http.get<any>('http://localhost:8080/employee/findEmployees/'+searchInput);
        } 
    addEmployee(username:string , password: string): Observable<any> {
        this.employee.nomUtilisateur = username;
        this.employee.motDePasse = password;
            return this.http.post<Employee>(`${this.employeesUrl}/add`, this.employee);
        }
    }