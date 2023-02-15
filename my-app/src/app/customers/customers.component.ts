import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2,Inject, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCostumerComponent } from './add-costumer/add-costumer.component';
import { AppComponent } from '../app.component';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  orderStatus:boolean = false;
  searchInput: string = '';
  costumersNumber: number = 0;
  activeCostumersNumber : number = 0;
  inActiveCostumersNumber : number = 0;
  showAddCostumer: boolean = false;
  showModifyCostumer: boolean = false;
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
    nTel: '',
    numRue: null,
    nomRue: '',
    codePostal: null,
    ville: '',
  };

  constructor(private rootComponent:AppComponent,private http: HttpClient,private customerService: CustomerService) { 
    this.costumersNumber = this.costumers.length;
    this.activeCostumersNumber = this.activeCostumersCalc();
    this.inActiveCostumersNumber = this.costumersNumber - this.activeCostumersNumber;
    this.newCostumersNumber = this.newCostumersCalc();
  }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
    this.isChecked = false;
    this.customerService.getCustomers().subscribe(data => {
      this.costumers = data;
    });
  }
  findCostumersByInput() {
    if(this.searchInput == '' || this.searchInput == null) {
      this.customerService.getCustomers().subscribe(data => {
        this.costumers = data;
      });
    } 
    else {
    this.customerService.findCustomersByInput(this.searchInput).subscribe(data => {
      this.costumers = data;
    });
  }
  }
  
  deleteCostumer( id: number) {
    this.http.delete('http://localhost:8080/costumer/delete/' + id).subscribe(data => {
      console.log('Costumer deleted successfully');
    },
    error => {
      console.log('Error deleting costumer');
    }
    );
  }
  nameOnClick() {
    this.orderStatus = !this.orderStatus;
    if (this.orderStatus) {
    this.customerService.getCustomerOrderedByNameAsc().subscribe(data => {
      this.costumers = data;
    });}
    else {
    this.customerService.getCustomerOrderedByNameDesc().subscribe(data => {
      this.costumers = data;
    });}
  }
  emailOnClick() {
    this.orderStatus = !this.orderStatus;
    if (this.orderStatus) {
    this.customerService.getCustomerOrderedByEmailAsc().subscribe(data => {
      this.costumers = data;
    });}
    else {
    this.customerService.getCustomerOrderedByEmailDesc().subscribe(data => {
      this.costumers = data;
    });}
  }
  onClickEdit(){
    this.showAddCostumer = true;

  }

  addCostumer(customer:Customer){
     this.customerService.addCustomer(customer);
  }
  /*
  editCostumer(customer:Customer){
    this.addPanel.editCostumer(customer);
  }
  */
  showAddCustomer() {
    this.showAddCostumer = true;
  }
  hideAddCustomer() {
    this.showAddCostumer = false;
  }
  showModifyCustomer(costumer:Customer) {
    this.showModifyCostumer = true;
    this.customer = costumer;
  }
  hideModifyCustomer() {
    this.showModifyCostumer = false;
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
