import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Fournisseur } from './Fournisseur';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent {

  orderStatus:boolean = false ;
  searchInput: string ='';
  isChecked: boolean = false ;
  showAddFournisseur:boolean= false ;
  showDeleteConfirmation:boolean= false ;
  allFournisseur:number =0 ;
  activeFournisseur:number=0;
  inActiveFournisseur:number=0;
  fournisseurs:Fournisseur[]=[];
  p: number =1 ;
  fournisseur: Fournisseur={
    idF: 0,
    nomF:"",
    email:"",
    n_tel:0
  };

  constructor(private rootComponent:AppComponent , private http:HttpClient) { }
  
  ngOnInit(): void {
    this.rootComponent.loggedIn = true;
  }
  addFournisseur(){

  }
  getAllFournisseur(){
    this.http
  }
  onClickName(){

  }
  onClickCategory(){

  }
  onClickPrice(){

  }
  onClickQuantity(){

  }
  deletefournisseur(){
    
  }
  findFournisseurByInput(){

  }
}
