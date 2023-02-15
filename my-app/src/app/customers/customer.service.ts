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
    nTel: '',
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

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.customersUrl}/update`, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.customersUrl}/delete/${id}`);
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
