import { Component } from '@angular/core';
import { CustomersComponent } from '../customers/customers.component';
@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.css']
})
export class AddCostumerComponent {

  constructor(private customersComponent: CustomersComponent) { }

  ngOnInit() {
  }

  hideAddCustomer() {
    this.customersComponent.hideAddCustomer();
  }
}
