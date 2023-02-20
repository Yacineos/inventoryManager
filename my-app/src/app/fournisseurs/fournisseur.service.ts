import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fournisseur } from "./Fournisseur";

@Injectable({
    providedIn: 'root'
  })

export class FournisseurService {
  private fournisseursUrl = 'http://localhost:8080/fournisseur';
    fournisseur: Fournisseur = {
        idF: 0,
        nomF: '',
        email: '',
        n_tel: 0
    };
    constructor(private http: HttpClient) { }
    getAllFournisseur(): Observable<Fournisseur[]> {
        return this.http.get<any>(this.fournisseursUrl + '/all');
    }
    addFournisseur(fournisseur: Fournisseur): Observable<any>{
        return this.http.post(this.fournisseursUrl + '/add', fournisseur);
    }
    deleteFournisseur(idF: number): void{
         this.http.delete(this.fournisseursUrl + '/delete/' + idF).subscribe(data => {
            console.log(data);
        });
    }
    modifyFournisseur(fournisseur: Fournisseur): void{
         this.http.post(this.fournisseursUrl + '/update', fournisseur).subscribe(data => {
            console.log(data);
        });
    }
    
}