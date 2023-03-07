import { Component } from '@angular/core';
import { Fournisseur } from 'src/app/fournisseurs/Fournisseur';
import { FournisseurService } from 'src/app/fournisseurs/fournisseur.service';
import { InventoryComponent } from '../inventory.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  showSuppliers: boolean = false;
  searchInput: string = "";
  fournisseurs:Fournisseur[] = [
    {idF:1, nomF:"Fournisseur 1",email:"",n_tel:0},
  ];
  showDiscount: boolean = false;
  showExpiryDate: boolean = false;
  constructor(private inventoryComponent: InventoryComponent , private fournisseurService : FournisseurService) { }

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
    console.log(supplier);
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

}
