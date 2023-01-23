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
  products: Product[];
  constructor() { 
  }

}
