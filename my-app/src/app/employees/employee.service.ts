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
        id_manager: 0
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
    getEmployeeRole(idE:number): Observable<number> {
        return this.http.get<number>(`http://localhost:8080/role/findRoleByIdEmployee/${idE}`);
      }
    addEmployee(idE:number , password: string , id_manager: number): Observable<any> {
        this.employee.idE = idE;
        this.employee.motDePasse = password;
        this.employee.id_manager = id_manager;
            return this.http.post<Employee>(`${this.employeesUrl}/add`, this.employee);
        }
     modifyEmployee(employee:Employee): void{
         this.http.post<Employee>(`${this.employeesUrl}/update`, employee).subscribe(data => {
            console.log(data);
          },
          error => {
            console.log('Error while editing employee');
          }
          );
        }
      deleteEmployee(id:number): void{
        this.http.delete(`${this.employeesUrl}/delete/${id}`).subscribe(data => {
          console.log(data);
        }
        );
      }   
    }