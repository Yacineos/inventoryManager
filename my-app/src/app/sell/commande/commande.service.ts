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
    addCommande(idE: number,idClient: number): Observable<any> {
         // id of anonym client
        this.commande.idE = idE;   
        this.commande.id_client = idClient;
        return this.http.post<Commande>(`${this.commandeUrl}/add`,this.commande);
    }
    updateCommande(commande: Commande): Observable<any> {
        return this.http.put<Commande>(`${this.commandeUrl}/modify`, commande);
    }

    getIdClient(idCommande: number): Observable<number> {
        return this.http.get<number>(`${this.commandeUrl}/findIdClient/${idCommande}`);
    }

}
