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
    quantity: 2
  };
  fournit:Fournit = {
    idF:0,
    idProduit:0,
    qte_produit:2,
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
  selectedSupplierId: number = 0;
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
    if(this.searchInput == ""){
      this.ngOnInit();
    }else{
    this.fournisseurService.getFournisseursByInput(this.searchInput).subscribe(
      (data) => {
        this.fournisseurs = data;
      }
    );
    }
    console.log(this.fournisseurs);
  }
  addProduct(){
    console.log(this.product);
    this.fournit.idProduit = this.product.id;
    this.fournit.qte_produit = this.product.quantity;
    this.fournit.idF = this.selectedSupplierId;
    this.inventoryService.addProduct(this.product).subscribe((data) => {
      console.log("addproductComponent:\n"+data);
      console.log(this.fournit);
      this.fournitService.addFournit(this.fournit).subscribe((data) => {
        console.log("addproductComponent:\n"+data);
        this.hideAddProduct();
      });
    });
  }
  
  change(){
    console.log(this.selectedSupplierId);
  }
}
