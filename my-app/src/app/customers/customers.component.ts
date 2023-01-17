import { Component, ElementRef, Renderer2,Inject, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { Customer } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  costumersNumber: number = 0;
  activeCostumersNumber : number = 0;
  inActiveCostumersNumber : number = 0;
  showAddCostumer: boolean = false;
  costumers:Customer[] = [];
  p: number = 1;
  isChecked: boolean = false;
  newCostumersNumber: number = 0;
  totalOrders: number = 0;
  constructor(private rootComponent:AppComponent,private renderer: Renderer2, private el: ElementRef) { 
    let i:number = 0 ;
    while(i<100){
      this.costumers.push({
        id: i,
        name: 'Costumer '+i,
        email: 'test@gmail.com',
        phone: '123456789',
        orders: i,
        ordersTotal: i,
        costumerSince: '2018-01-01',
        isChecked: false
      });
      i++;  
    }
    this.costumersNumber = this.costumers.length;
    this.activeCostumersNumber = this.activeCostumersCalc();
    this.inActiveCostumersNumber = this.costumersNumber - this.activeCostumersNumber;
    this.newCostumersNumber = this.newCostumersCalc();
  }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
    this.isChecked = false;
  }
  showAddCustomer() {
    this.showAddCostumer = true;
  }
  hideAddCustomer() {
    this.showAddCostumer = false;
  }
  updateIsChecked() {
    if(this.isChecked) {
      this.costumers.forEach(row => {
        row.isChecked = true;
      });
    } else {
      this.costumers.forEach(row => {
        row.isChecked = false;
      });
    }
  }
  isActive(costumer:Customer) {
      return costumer.orders>0;
  }
  activeCostumersCalc() {
    let count = 0;
    let i = 0;
    while (i < this.costumers.length) {
      if (this.isActive(this.costumers[i])) {
        count++;
      }
      i++;
    }
    return count;
  }
  isNew(costumer:Customer) {
    let today = new Date();
    let costumerSince = new Date(costumer.costumerSince);
    let diff = Math.abs(today.getTime() - costumerSince.getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    return diffDays<30;
  }
  newCostumersCalc() {
    let count = 0;
    let i = 0;
    while (i < this.costumers.length) {
      if (this.isNew(this.costumers[i])) {
        this.totalOrders += this.costumers[i].orders;
        count++;
      }
      i++;
    }
    return count;
  }
}
