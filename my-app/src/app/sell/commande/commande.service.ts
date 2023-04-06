import { HttpClient } from "@angular/common/http";
import { Commande } from "./commande";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CommandeService {

    private commandeUrl = 'http://localhost:8080/commande';
    commande: Commande = {
        id_commande: 0,
        date_commande: new Date(),
        id_client: 0,
        idE: 0,    
    };
    constructor(private http: HttpClient) { }
    getLastId(): Observable<number> {
        return this.http.get<number>(`${this.commandeUrl}/lastId`);
    }
    addCommande(idE: number): Observable<any> {
        this.commande.id_client = 1; // id of anonym client
        this.commande.idE = idE;   
        return this.http.post<Commande>(`${this.commandeUrl}/add`,this.commande);
    }

}
