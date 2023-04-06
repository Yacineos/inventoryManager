import { Component } from '@angular/core';
import { Product } from 'src/app/inventory/product';
import { Contient } from '../contient/contient';
import { ContientService } from '../contient/contient.service';
import { CommandeService } from '../commande/commande.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  p: number = 0 ;
  isChecked: boolean = false ;
  contients: Contient[]= [];
  currentCommandeId: number = 0;
  constructor(private contientService: ContientService , private commandeService:CommandeService) { }
  ngOnInit() {
    this.commandeService.getLastId().subscribe(data => {
      this.currentCommandeId = data;
      console.log(this.currentCommandeId);
      this.contientService.getContientByIdCommande(this.currentCommandeId).subscribe(data => {
        this.contients = data;
        console.log(this.contients);
      });
    });
    
    
    
    this.isChecked = false;
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
