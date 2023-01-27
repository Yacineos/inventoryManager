import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Product } from './product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  showDeleteConfirmation: boolean = false;
  showAddProduct: boolean = false;
  products:Product[] = [];
  p: number = 1;
  allProducts: number = 0;
  activeProducts: number = 0;
  inActiveProducts: number = 0;
  lowStockProducts: number = 0;
  expireSoonProducts: number = 0;
  isChecked: boolean = false;
  constructor(private rootComponent:AppComponent) {
    let i:number = 0 ;
    while(i<100){
      this.products.push({
        id: i,
        name: 'Product '+i,
        price: i,
        quantity: i,
        discount: i>10?i-10:0,
        totalValue: i,
        listed: true,
        expiryDate: new Date('01/01/2019'),
        isChecked: false
      });
      i++;  
    }
    this.allProducts = this.products.length;
    this.activeProducts = this.activeProductCount();
    this.inActiveProducts = this.allProducts - this.activeProducts;
    this.lowStockProducts = this.lowStock();
    this.expireSoonProducts = this.expireSoon();
   }
  ngOnInit() {
    this.rootComponent.loggedIn = true;
    this.showAddProduct = false;
    this.showDeleteConfirmation = false;
    this.isChecked = false;
  }
  activeProductCount() {
    let count = 0;
    let i = 0;
    while (i < this.products.length) {
      if (this.products[i].listed) {
        count++;
      }
      i++;
    }
    return count;
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
  lowStock() {
    let count = 0;
    let i = 0;
    while (i < this.products.length) {
      if (this.products[i].quantity < 10) {
        count++;
      }
      i++;
    }
    return count;
  } 
  expireSoon() {
    let count = 0;
    let i = 0;
    while (i < this.products.length) {
      if (this.products[i].expiryDate < new Date()) {
        count++;
      }
      i++;
    }
    return count;
  }
  deleteProduct() {
    this.showDeleteConfirmation = true;
  }
  updateIsChecked() {
    if(this.isChecked) {
      this.products.forEach(row => {
        row.isChecked = true;
      });
    } else {
      this.products.forEach(row => {
        row.isChecked = false;
      });
    }
  }
  

}
