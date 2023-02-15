import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth/auth.service';
import { Fournisseur } from './Fournisseur';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent {
  currentUserName: string = '';
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

  constructor(private authService:AuthService,private rootComponent:AppComponent , private http:HttpClient) {
    
   }
  
  ngOnInit(): void {
    this.rootComponent.loggedIn = true;
    this.getAllFournisseur().subscribe(data => {
      this.fournisseurs = data;
    }
    );
    this.currentUserName = this.authService.currentUserName;
  }
  addFournisseur(){

  }
  getAllFournisseur(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/fournisseur/all');
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
