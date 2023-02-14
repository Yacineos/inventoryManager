import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Fournisseur } from '../fournisseurs/Fournisseur';
import { FournisseursComponent } from '../fournisseurs/fournisseurs.component';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent {

  fournisseur: Fournisseur={
      idF: 0,
      nomF:"",
      email:"",
      n_tel:0
  };
  

  constructor(private fournisseurComponent : FournisseursComponent,private http:HttpClient){

  }
  OnInit(){
    this.fournisseur=this.fournisseurComponent.fournisseur;
  }
  addFournisseur(){

  }
  hideAddFournisseur(){

  }
}
