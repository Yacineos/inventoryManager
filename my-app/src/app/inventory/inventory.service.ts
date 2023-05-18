import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product";



@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    private inventoryUrl = 'https://cautious-fish-production.up.railway.app/product';
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
    addProduct(product: Product): Observable<Product> {
        console.log("productService : \n "+product);
        return this.http.post<Product>(`${this.inventoryUrl}/add`, product);

    }

    updateProduct(product: Product): Observable<any>|void {
        this.http.post<Product>(`${this.inventoryUrl}/update`, product).subscribe(data => {
            console.log("productService : \n"+data);
        },
        error => {
            console.log('Error while editing product');
        }
        );
    }
    updateQteProduct(id:number , qte: number): Observable<any>|void {
        this.product.id = id;
        this.product.quantity = qte;
       // /subtractQuantity/{id}/{qte}
        this.http.post<Product>(`${this.inventoryUrl}/subtractQuantity`,this.product).subscribe(data => {
            console.log("productService : \n"+data);
        }
        );
    }
    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${this.inventoryUrl}/delete/${id}`);
    }
    findProductsByInput(searchInput: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.inventoryUrl}/find/${searchInput}`);
    }
    findProductsById(searchInput: string): Observable<Product[]> {
        const id = parseInt(searchInput);
        return this.http.get<Product[]>(`${this.inventoryUrl}/find/id/${id}`);
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