import { Injectable } from "@angular/core";
import { Contient } from "./contient";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class ContientService {

    private contientUrl = 'http://localhost:8080/contient';
    contient: Contient = {
        id:{
            idCommande: 0,
            idProduit: 0,
        },
        qte_produit: 0,
        };
    constructor(private http: HttpClient) { }

    getAllContient(): Observable<any> {
        return this.http.get<Contient[]>(`${this.contientUrl}/all`);
    }
    getContientByIdCommande(id:number): Observable<any> {
        return this.http.get<Contient[]>(`${this.contientUrl}/findContientByIdCommande/${id}`);
    }

    addContient(idCommande:number , idProduit: number, qte_produit: number): Observable<any> {
        this.contient.id.idCommande = idCommande;
        this.contient.id.idProduit = idProduit;
        this.contient.qte_produit = qte_produit;   
        return this.http.post<Contient>(`${this.contientUrl}/addContient`,this.contient);
    }
    deleteByIdCommandeAndIdProduit(idCommande:number, idProduit:number): void{
        this.http.delete(`${this.contientUrl}/deleteContientByIdCommandeAndIdProduit/${idCommande}/${idProduit}`).subscribe(data => {
          console.log(data);
          window.location.reload();
        },
        error => {
          console.log('Error while deleting contient');
          window.location.reload();
        }
        );
    }
    modifyContient(contient:Contient): void{
        this.http.post<Contient>(`${this.contientUrl}/update`, contient).subscribe(data => {
          console.log(data);
        },
        error => {
          console.log('Error while editing contient');
        }
        );
    }
    findNbElementByIdCommande(id:number): Observable<any> {
        return this.http.get<number>(`${this.contientUrl}/findNbElementByIdCommande/${id}`);
    }

    deleteContientByIdCommande(id:number): void{
        this.http.delete(`${this.contientUrl}/deleteContientByIdCommande/${id}`).subscribe(data => {
          console.log(data);
          window.location.reload();
        },
        error => {
          console.log('Error while deleting contient');
          window.location.reload();
        }
        );
    }
}