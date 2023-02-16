import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product";



@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    private inventoryUrl = 'http://localhost:8080/product';
    product: Product = {
        id: 0,
        name: '',
        category: '',
        prix_de_revient: 0,
        price: 0,
        quantity: 0,
    };
    constructor(private http:HttpClient) { }

    getProducts(): Observable<Product[]> {	
        return this.http.get<Product[]>(`${this.inventoryUrl}/all`);
    }
    addProduct(product: Product): Observable<Product>|void {
        console.log(product);
        this.http.post<Product>(`${this.inventoryUrl}/add`, product).subscribe(data => {
            console.log(data);
        });  
    }

    updateProduct(product: Product): Observable<any>|null {
        this.http.post<Product>(`${this.inventoryUrl}/update`, product).subscribe(data => {
            console.log(data);
        },
        error => {
            console.log('Error while editing product');
        }
        );
        return null;
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${this.inventoryUrl}/delete/${id}`);
    }
    findProductsByInput(searchInput: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/find/${searchInput}`);
    }
    getProductOrderedByNameAsc(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/all/nameAsc`);
    }
    getProductOrderedByNameDesc(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/all/nameDesc`);
    }
    getProductOrderedByPriceAsc(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/all/priceAsc`);
    }
    getProductOrderedByPriceDesc(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/all/priceDesc`);
    }
    getProductOrderedByQuantityAsc(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/all/quantityAsc`);
    }
    getProductOrderedByQuantityDesc(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/all/quantityDesc`);
    }
    getProductOrderedByCategoryAsc(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/all/categoryAsc`);
    }
    getProductOrderedByCategoryDesc(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/all/categoryDesc`);
    }



}