import { Component, ElementRef, Renderer2,Inject, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  showAddCostumer: boolean = false;
  constructor(private rootComponent:AppComponent,private renderer: Renderer2, private el: ElementRef) { }
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
