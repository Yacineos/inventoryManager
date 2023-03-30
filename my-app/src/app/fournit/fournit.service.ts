import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fournit } from "./fournit";

@Injectable({
    providedIn: 'root'
  })
export class FournitService {
    fournit:Fournit = {
        idF:0,
        idProduit:0,
        qte_produit:0,
        dateF: new Date()
    };
    fournitUrl = 'http://localhost:8080/fournit';
    constructor(private http: HttpClient) { }
    addFournit(fournit:Fournit):Observable<Fournit>{
        return this.http.post<Fournit>(`${this.fournitUrl}/add`,fournit,{
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
        }
    }


