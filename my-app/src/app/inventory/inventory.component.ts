import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth/auth.service';
import { InventoryService } from './inventory.service';
import { Product } from './product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  currentUserId: number = 0;
  searchInput: string = "";
  orderStatus: boolean = false;
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
  constructor(private rootComponent:AppComponent , private http: HttpClient,private authService:AuthService,private inventoryService: InventoryService) {
    
    //this.activeProducts = this.activeProductCount();
    this.inActiveProducts = this.allProducts - this.activeProducts;
    //this.lowStockProducts = this.lowStock();
   // this.expireSoonProducts = this.expireSoon();
   }
  ngOnInit() {
    this.getAllProducts().subscribe(data => {
      this.products = data;
      this.allProducts = this.products.length;
      this.lowStockProducts = this.lowStock();
    });
    this.rootComponent.loggedIn = true;
    this.showAddProduct = false;
    this.showDeleteConfirmation = false;
    this.isChecked = false;
    this.currentUserId = this.authService.currentUserId;
  }
  getAllProducts(): Observable<any> {
    return this.inventoryService.getProducts();
  }
  findProductsByInput() {
    if(this.searchInput == "" || this.searchInput == null) {
      this.getAllProducts().subscribe(data => {
        this.products = data;
      });
    }else {
      this.inventoryService.findProductsByInput(this.searchInput).subscribe(data => {
      this.products = data; 
    });
    }
  }
  getAllProductsOrderByName() {
    this.http.get<any>('http://localhost:8080/product/all/nameAsc').subscribe(data => {
      this.products = data;
    });
  }
  getAllProductsOrderByNameDesc() {
    this.http.get<any>('http://localhost:8080/product/all/nameDesc').subscribe(data => {
      this.products = data;
    });
  }
  onClickName() {
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus) {
      this.getAllProductsOrderByName();
    } else {
      this.getAllProductsOrderByNameDesc();
    }
  }
  getAllProductsOrderByPrice() {
    this.http.get<any>('http://localhost:8080/product/all/priceAsc').subscribe(data => {
      this.products = data;
    });
  }
  getAllProductsOrderByPriceDesc() {
    this.http.get<any>('http://localhost:8080/product/all/priceDesc').subscribe(data => {
      this.products = data;
    });
  }
  onClickPrice() {
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus) {
      this.getAllProductsOrderByPrice();
    } else {
      this.getAllProductsOrderByPriceDesc();
    }
  }
  getAllProductsOrderByQuantity() {
    this.http.get<any>('http://localhost:8080/product/all/quantityAsc').subscribe(data => {
      this.products = data;
    });
  }
  getAllProductsOrderByQuantityDesc() {
    this.http.get<any>('http://localhost:8080/product/all/quantityDesc').subscribe(data => {
      this.products = data;
    });
  }
  onClickQuantity() {
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus) {
      this.getAllProductsOrderByQuantity();
    } else {
      this.getAllProductsOrderByQuantityDesc();
    }
  }

  getAllProductsOrderByCategory() {
    this.http.get<any>('http://localhost:8080/product/all/categoryAsc').subscribe(data => {
      this.products = data;
    });
  }
  getAllProductsOrderByCategoryDesc() {
    this.http.get<any>('http://localhost:8080/product/all/categoryDesc').subscribe(data => {
      this.products = data;
    });
  }
  onClickCategory() {
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus) {
      this.getAllProductsOrderByCategory();
    } else {
      this.getAllProductsOrderByCategoryDesc();
    }
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
  deleteProduct(id: number) {
    this.inventoryService.deleteProduct(id);
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
