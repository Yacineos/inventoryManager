import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private rootComponent:AppComponent , private http: HttpClient) {
    this.allProducts = this.products.length;
    //this.activeProducts = this.activeProductCount();
    this.inActiveProducts = this.allProducts - this.activeProducts;
    this.lowStockProducts = this.lowStock();
   // this.expireSoonProducts = this.expireSoon();
   }
  ngOnInit() {
    this.getAllProducts().subscribe(data => {
      this.products = data;
    });
    this.rootComponent.loggedIn = true;
    this.showAddProduct = false;
    this.showDeleteConfirmation = false;
    this.isChecked = false;
  }
  getAllProducts(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/product/all');
  }
  // to impelement if we have time to do so
  /*
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
  */
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
  // to implement when university project is done 
  /*
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
  */
  deleteProduct() {
    this.showDeleteConfirmation = true;
  }
  /*
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
  */
  

}
