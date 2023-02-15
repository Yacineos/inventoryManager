import { Component } from '@angular/core';
import { InventoryComponent } from '../inventory.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  showDiscount: boolean = false;
  showExpiryDate: boolean = false;
  constructor(private inventoryComponent: InventoryComponent) { }

  ngOnInit() {
  }

  hideAddProduct() {
   this.inventoryComponent.hideAddProduct();
  }
  toggleDiscount() {
    this.showDiscount = !this.showDiscount;
  }
  toggleExpiryDate() {
    this.showExpiryDate = !this.showExpiryDate;
  }
}
