import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2,Inject, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
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
  customer: Customer = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    phone: '',
    numRue: 0,
    nomRue: '',
    codePostal: 0,
    ville: '',
  };

  constructor(private rootComponent:AppComponent,private http: HttpClient) { 
    this.getCustomers().subscribe(data => {
      this.costumers = data;
    });
    this.costumersNumber = this.costumers.length;
    this.activeCostumersNumber = this.activeCostumersCalc();
    this.inActiveCostumersNumber = this.costumersNumber - this.activeCostumersNumber;
    this.newCostumersNumber = this.newCostumersCalc();
  }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
    this.isChecked = false;
  }
  getCustomers(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/costumer/all');
  }
  addCostumer(){
  //this.customer={costumerSince: new Date().toISOString()};
    this.http.post<Customer>('http://localhost:8080/costumer/add',this.customer).subscribe(data => {
        console.log('Employee added successfully');
      },
      error => {
        console.log('Error adding employee');
      }
    ); 
  }
  showAddCustomer() {
    this.showAddCostumer = true;
  }
  hideAddCustomer() {
    this.showAddCostumer = false;
  }
  /*
  updateIsChecked() {
    let i = 0;
    while (i < this.costumers.length) {
      this.costumers[i].isChecked = this.isChecked;
      i++;
    }
  }
  */
  // I have to check it later 
  isActive(costumer:Customer) {
      //return costumer.orders>0;
      return true;
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
  // to change because it isn't updated yet
  isNew(costumer:Customer) {
    /*
    let today = new Date();
    let costumerSince = new Date(costumer.costumerSince);
    let diff = Math.abs(today.getTime() - costumerSince.getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    return diffDays<30;
    */
    return true;
  }
  newCostumersCalc() {
    /*
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
  */
    return 0;
  }

}
