import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { CustomersComponent } from '../customers.component';

@Component({
  selector: 'app-modify-costumer',
  templateUrl: './modify-costumer.component.html',
  styleUrls: ['./modify-costumer.component.css']
})
export class ModifyCostumerComponent {
  customer: Customer= {
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
  constructor(private customersComponent: CustomersComponent,private http:HttpClient,private costumerService: CustomerService) { }

  
  ngOnInit() {
    this.customer= this.customersComponent.customer;
  }
  hideAddCustomer() {
    this.customersComponent.hideAddCustomer();
  }
  hideModifyCustomer() {
    this.customersComponent.hideModifyCustomer();
  }
  addCustomer() {
    //this.customersComponent.customer = this.customer;
    this.customersComponent.addCostumer(this.customer);
    this.customersComponent.hideAddCustomer();
  }
  modifyCustomer() {
    console.log(this.customer);
    this.costumerService.updateCustomer(this.customer);
    this.customersComponent.hideModifyCustomer();
  }
}

