import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from '../customers/customer';
import { CustomersComponent } from '../customers/customers.component';
@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.css']
})
export class AddCostumerComponent {
  
  customer: Customer= {
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
  constructor(private customersComponent: CustomersComponent,private http:HttpClient) {
    
   }
  
  ngOnInit() {
    this.customer= this.customersComponent.customer;
  }
  editCostumer(customer: Customer) {
    this.http.put('http://localhost:8080/costumer/update', customer).subscribe(data => {
      console.log(data);
    }
    );
  }
  hideAddCustomer() {
    this.customersComponent.hideAddCustomer();
  }
  addCustomer() {
    //this.customersComponent.customer = this.customer;
    this.customersComponent.addCostumer(this.customer);
    this.customersComponent.hideAddCustomer();
  }
}
