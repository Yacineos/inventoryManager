import { Component } from '@angular/core';
import { Product } from 'src/app/inventory/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  p: number = 0 ;
  isChecked: boolean = false ;
  products:Product[] = [];
  constructor() { 
    this.isChecked = false;
  }
  ngOnInit() {
    let i:number = 0 ;
    while(i<100){
      this.products.push({
        id: i,
        name: 'Product '+i,
        price: i,
        quantity: i,
        category: 'Category '+i,
      });
      i++;  
    }
    this.isChecked = false;
  }
  /*
  deleteProduct() {
    let i:number = 0;
    while(i<this.products.length){
      if(this.products[i].isChecked){
        this.products.splice(i,1);
      }
      i++;
    }
  }
  */
 /*
  selectAll() {
    let i:number = 0;
    while(i<this.products.length){
      this.products[i].isChecked = this.isChecked;
      i++;
    }
  }
  */
 /*
  selectProduct() {
    let i:number = 0;
    while(i<this.products.length){
      if(this.products[i].isChecked){
        this.isChecked = true;
        break;
      }
      this.isChecked = false;
      i++;
    }
  }
  */


  
}
