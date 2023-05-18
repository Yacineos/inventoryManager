import { Component, NgModule } from '@angular/core';
import { Product } from 'src/app/inventory/product';
import { Contient } from '../contient/contient';
import { ContientService } from '../contient/contient.service';
import { CommandeService } from '../commande/commande.service';
import { InventoryService } from 'src/app/inventory/inventory.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  p: number = 0 ;
  isChecked: boolean = false ;
  contients: Contient[]= [];
  commandeInfos: any[] = [];
  currentCommandeId: number = 0;
  cartTotal: number=0;
  product:Product = {
    id: 0,
    name: '',
    category: '',
    prix_de_revient: 0,
    price: 0,
    quantity: 0
  };

  constructor(private inventoryService: InventoryService,private contientService: ContientService , private commandeService:CommandeService) { }
  ngOnInit() {
    this.commandeService.getLastId().subscribe(data => {
      this.currentCommandeId = data;
      this.commandeService.getCommandeInfo(this.currentCommandeId).subscribe(data => {
        console.log("dto :" + data);
        this.commandeInfos = data;
        
        let i =  0 ;
        while (i < this.commandeInfos.length) {
          this.cartTotal += this.commandeInfos[i][4] ;
          i++;
        }
        
       // this.inventoryService.findProductsByInput()
      });
    });
    
    
    
    this.isChecked = false;
  }
  editProduct() {
    
  }
  deleteProduct(productId: number) {
    this.contientService.deleteByIdCommandeAndIdProduit(this.currentCommandeId,productId);
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
