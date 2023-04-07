import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { CustomersComponent } from './customers.component';
import { AddCostumerComponent } from './add-costumer/add-costumer.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = 'http://localhost:8080/costumer';
  customer: Customer = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    nTel: 0,
    numRue: 0,
    nomRue: '',
    codePostal: 0,
    ville: '',
    };
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersUrl}/all`);
  }

  addCustomer(customer: Customer): Observable<Customer>|void {
    console.log(customer);
    this.http.post<Customer>(`${this.customersUrl}/add`, customer).subscribe(data => {
        console.log(data);
    });  
  }

  updateCustomer(customer: Customer): Observable<any>|null {
     this.http.post<Customer>(`${this.customersUrl}/update`, customer).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log('Error while editing costumer');
    }
    );
    return null;
  }

  deleteCustomer(id: number): void {
    console.log(id +"in service");
    this.http.delete(`${this.customersUrl}/delete/${id}`).subscribe(data => {
      console.log(data);
    }
    );
  }

  findCustomersByInput(searchInput: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersUrl}/findCostumers/${searchInput}`);
  }

  getCustomerOrderedByNameAsc(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersUrl}/all/nameAsc`);
  }

  getCustomerOrderedByNameDesc(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersUrl}/all/nameDesc`);
  }
  
  getCustomerOrderedByEmailAsc(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersUrl}/all/emailAsc`);
  }

  getCustomerOrderedByEmailDesc(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersUrl}/all/emailDesc`);
  }
  
}
