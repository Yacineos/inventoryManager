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
    name: '',
    email: '',
    phone: '',
    orders: 0,
    ordersTotal: 0,
    costumerSince: '',
    isChecked: false
  };
  constructor(private customersComponent: CustomersComponent) { }

  ngOnInit() {
  }

  hideAddCustomer() {
    this.customersComponent.hideAddCustomer();
  }
  addCustomer() {
    //this.customersComponent.customer = this.customer;
    this.customersComponent.addCostumer();
    this.customersComponent.hideAddCustomer();
  }
}
