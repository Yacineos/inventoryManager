import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Fournisseur } from '../Fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { FournisseursComponent } from '../fournisseurs.component';

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
  

  constructor(private fournisseurComponent : FournisseursComponent,private http:HttpClient, private fournisseurService: FournisseurService) { }

  ngOnInit(){
    this.fournisseur=this.fournisseurComponent.fournisseur;
  }
  addFournisseur(){
    this.fournisseurService.addFournisseur(this.fournisseur).subscribe(data => {
      this.fournisseurComponent.fournisseurs.push(data);
    }
    );
    this.hideAddFournisseur();
  }
  hideAddFournisseur(){
    this.fournisseurComponent.showAddFournisseur = false;
  }
}

