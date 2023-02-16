import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { CustomersComponent } from '../customers.component';
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
    numRue: null,
    nomRue: '', 
    codePostal: null,
    ville: '',      
  };
  customerTemp: Customer= {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    nTel: '',
    numRue: null,
    nomRue: '',
    codePostal: null,
    ville: '',
  };
  constructor(private customersComponent: CustomersComponent,private http:HttpClient,private costumerService: CustomerService) {  
  }
  
  ngOnInit() {
  }
  hideAddCustomer() {
    this.customersComponent.hideAddCustomer();
  }
  addCustomer() {
    this.costumerService.addCustomer(this.customer);
    this.customersComponent.hideAddCustomer();
  }
}
