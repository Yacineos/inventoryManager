import { Component, ElementRef, Renderer2,Inject, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { Customer } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  showAddCostumer: boolean = false;
  Costumers:Customer[] = [];
  p: number = 1;
  constructor(private rootComponent:AppComponent,private renderer: Renderer2, private el: ElementRef) { 
    let i:number = 0 ;
    while(i<100){
      this.Costumers.push({
        id: i,
        name: 'Costumer '+i,
        email: 'test@gmail.com',
        orders: i,
        ordersTotal: i,
        costumerSince: '2018-01-01'
      });
      i++;  
    }
  }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
  }
  showAddCustomer() {
    this.showAddCostumer = true;
  }
  hideAddCustomer() {
    this.showAddCostumer = false;
  }
}
