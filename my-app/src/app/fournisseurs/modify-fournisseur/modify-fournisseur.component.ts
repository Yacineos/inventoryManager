import { Component } from '@angular/core';
import { Fournisseur } from '../Fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { FournisseursComponent } from '../fournisseurs.component';

@Component({
  selector: 'app-modify-fournisseur',
  templateUrl: './modify-fournisseur.component.html',
  styleUrls: ['./modify-fournisseur.component.css']
})
export class ModifyFournisseurComponent {

  fournisseur : Fournisseur={
    idF: 0,
    nomF:"",
    email:"",
    n_tel:0
  };
  constructor(private fournisseurService:FournisseurService , private fournisseurComponent : FournisseursComponent) { }

  ngOnInit(): void {
    this.fournisseur=this.fournisseurComponent.fournisseur;
  }
  hideModifyFournisseur(){
    this.fournisseurComponent.showModifyFournisseur = false;
  }
  modifyFournisseur(){
    this.fournisseurService.modifyFournisseur(this.fournisseur);
    this.hideModifyFournisseur();
    this.fournisseurService.getAllFournisseur().subscribe(data => {
      this.fournisseurComponent.fournisseurs = data;
    }
    );
  }
}
