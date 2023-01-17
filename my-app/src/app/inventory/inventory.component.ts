import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Product } from './product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  showAddProduct: boolean = false;
  products:Product[] = [];
  p: number = 1;
  allProductsQuantity: number = 0;
  constructor(private rootComponent:AppComponent) {
    let i:number = 0 ;
    while(i<100){
      this.products.push({
        id: i,
        name: 'Product '+i,
        price: i,
        quantity: i,
        discount: i,
        totalValue: i
      });
      i++;  
    }
    this.allProductsQuantityCalculator();
   }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
    this.showAddProduct = false;
  }
  public allProductsQuantityCalculator() {
    let i:number = 0;
    this.allProductsQuantity = 0;
    while(i<this.products.length){
      this.allProductsQuantity += this.products[i].quantity;
      i++;
    }
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
