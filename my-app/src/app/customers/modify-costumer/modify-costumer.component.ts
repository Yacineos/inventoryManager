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
    nTel: '',
    numRue: 0,
    nomRue: '', 
    codePostal: 0,
    ville: '',      
  };
  constructor(private customersComponent: CustomersComponent,private http:HttpClient,private costumerService: CustomerService) { }

  
  ngOnInit() {
    this.customer= this.customersComponent.customer;
  }
  editCostumer(customer: Customer) {
    this.costumerService.updateCustomer(customer).subscribe(data => {
      console.log('Costumer edited successfully');
    },
    error => {
      console.log('Error while editing costumer');
    });
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
}

