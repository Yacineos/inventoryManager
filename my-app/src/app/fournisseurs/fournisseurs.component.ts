import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth/auth.service';
import { Fournisseur } from './Fournisseur';
import { FournisseurService } from './fournisseur.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent {
  currentUserId: number = 0;
  orderStatus:boolean = false ;
  searchInput: string ='';
  isChecked: boolean = false ;
  showAddFournisseur:boolean= false ;
  showModifyFournisseur:boolean= false ;
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

  constructor(private authService:AuthService,private rootComponent:AppComponent , private http:HttpClient, private fournisseurService: FournisseurService) {
    
   }
  
  ngOnInit(): void {
    this.rootComponent.loggedIn = true;
    this.getAllFournisseur().subscribe(data => {
      this.fournisseurs = data;
    }
    );
    this.currentUserId = this.authService.currentUserId;
  }
  addFournisseur(){
    this.showAddFournisseur = true;
  }
  getAllFournisseur(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/fournisseur/all');
  }
  ModifyFournisseur(fournisseur: Fournisseur){
    this.fournisseur = fournisseur;
    this.showModifyFournisseur = true;
  }
  onClickName(){
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus){
      this.fournisseurService.getAllFournisseurByNom().subscribe(data => {
        this.fournisseurs = data;
      }
      );
    }
    else{
      this.fournisseurService.getAllFournisseurByNomDesc().subscribe(data => {
        this.fournisseurs = data;
      }
      );
    }
    
  }
  onClickEmail(){
    this.orderStatus = !this.orderStatus;
    if(this.orderStatus){
      this.fournisseurService.getAllFournisseurByEmail().subscribe(data => {
        this.fournisseurs = data;
      }
      );
    }
    else{
      this.fournisseurService.getAllFournisseurByEmailDesc().subscribe(data => {
        this.fournisseurs = data;
      }
      );
    }
    
  }
  deletefournisseur(fournisseurId: number){
    this.fournisseurService.deleteFournisseur(fournisseurId);
  }
  findFournisseurByInput(){
    if(this.searchInput == "" || this.searchInput == null) {
      this.getAllFournisseur().subscribe(data => {
        this.fournisseurs = data;
      }
      );
    }else {
    this.fournisseurService.getFournisseursByInput(this.searchInput).subscribe(data => {
      this.fournisseurs = data;
    }
    );
  }
}
}
