import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  showAddProduct: boolean = false;
  constructor(private rootComponent:AppComponent) { }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
    this.showAddProduct = false;
  }
  AddProduct() {
    this.showAddProduct = true;
    const elements = document.querySelectorAll(".main-container");
    elements.forEach(element => {
      element.classList.add("blur");
    });
  }
  hideAddProduct() {
    this.showAddProduct = false;
    
  }
}
