import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() { 
    
  }
  public addToCart(product: Product) {
    this.items.push(product);
  }
  public getItems(){
    return this.items;
  }
  public clearCart(){
    this.items=[];
    return this.items;
  }
}
