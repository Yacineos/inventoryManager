import { Component } from '@angular/core';
import { Fournisseur } from 'src/app/fournisseurs/Fournisseur';
import { FournisseurService } from 'src/app/fournisseurs/fournisseur.service';
import { Fournit } from 'src/app/fournit/fournit';
import { FournitService } from 'src/app/fournit/fournit.service';
import { InventoryComponent } from '../inventory.component';
import { InventoryService } from '../inventory.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: Product= {
    id: 0,
    name: '',
    category: '',
    prix_de_revient: 0,
    price : 0,
    quantity: 0
  };
  fournit:Fournit = {
    idF:0,
    idProduit:0,
    qteProduit:0,
    dateF: new Date()
  };
  name: String = "";
  showSuppliers: boolean = false;
  searchInput: string = "";
  fournisseurs:Fournisseur[] = [
    {idF:1, nomF:"Fournisseur 1",email:"",n_tel:0},
  ];
  showDiscount: boolean = false;
  showExpiryDate: boolean = false;
  constructor(private inventoryComponent: InventoryComponent , private fournisseurService : FournisseurService , private inventoryService : InventoryService , private fournitService:FournitService ) { }

  ngOnInit() {
    this.fournisseurService.getAllFournisseur().subscribe(
      (data) => {
        this.fournisseurs = data;
      }
    );
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
  selectSupplier(supplier:Fournisseur){
    this.fournit.idF = supplier.idF;
    this.showSuppliers = false;
    this.name=supplier.nomF;
  }
  searchSupplier(){
    if(this.searchInput == "")
      this.ngOnInit();
    this.fournisseurService.getFournisseursByInput(this.searchInput).subscribe(
      (data) => {
        this.fournisseurs = data;
      }
    );
  }
  addProduct(){
    this.fournit.idProduit = this.product.id;
    this.fournit.qteProduit = this.product.quantity;
    this.inventoryService.updateProduct(this.product);
    console.log("product added/updated");
    this.fournitService.addFournit(this.fournit);
    console.log("fournit added");
    this.hideAddProduct();
  }

}
