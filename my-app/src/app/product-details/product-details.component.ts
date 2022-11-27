import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product |undefined ;
  constructor(private route: ActivatedRoute,private cartService: CartService){
  }
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product have been added to the cart !');
  }

}
