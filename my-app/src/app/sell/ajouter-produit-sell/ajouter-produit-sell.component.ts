import { Component } from '@angular/core';
import { SellComponent } from '../sell.component';
import { Product } from 'src/app/inventory/product';
import { InventoryService } from 'src/app/inventory/inventory.service';
import { ContientService } from '../contient/contient.service';
import { CommandeService } from '../commande/commande.service';

@Component({
  selector: 'app-ajouter-produit-sell',
  templateUrl: './ajouter-produit-sell.component.html',
  styleUrls: ['./ajouter-produit-sell.component.css']
})
export class AjouterProduitSellComponent {

  searchInput: string = '';
  selectedProduitId: number = 0;
  selectedProduitPrice: number = 0;
  selectedProduitQte: number = 0;
  currentIdCommande: number = 0;
  quantite: number = 0;
  produits:Product[]=[];
  produit: Product = {
    id: 0,
    name: '',
    category: '',
    prix_de_revient: 0,
    price: 0,
    quantity: 0
  };

  constructor(private commandeService:CommandeService,private contientService: ContientService,private sellComponent:SellComponent , private inventoryService: InventoryService) { }
  
  ngOnInit() {
    this.commandeService.getLastId().subscribe(data => {
      this.currentIdCommande = data;
      console.log(this.currentIdCommande);
    }
    );
  }
  addProduit(){
    this.contientService.addContient(this.currentIdCommande,this.selectedProduitId,this.quantite).subscribe(data => {
      console.log(data);
      this.hideAddProduit();
      window.location.reload();
    }
    );
  }
  hideAddProduit(){
    this.sellComponent.showAddProduit = false;
  }
  searchProduit(){
    if(this.searchInput == '' || this.searchInput == null){
      this.inventoryService.getProducts().subscribe(data => {
        this.produits= data;
      }
      );
    }else{
      this.inventoryService.findProductsById(this.searchInput).subscribe(data => {
        this.produits = data;
      }
      );
    }
  }
  change(){
    const selectedProduit = this.produits.find(produit => produit.id == this.selectedProduitId);
    this.inventoryService.findProductsById(''+this.selectedProduitId).subscribe(data => {
      this.produits = data;
      this.selectedProduitPrice = selectedProduit ? this.produits[0].price : 0;
      this.selectedProduitQte = selectedProduit ? this.produits[0].quantity : 0;
  });
    
  }

}
