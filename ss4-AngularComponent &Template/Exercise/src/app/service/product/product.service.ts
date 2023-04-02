import { Injectable } from '@angular/core';
import {Product} from "../../model/Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  addProduct(even: any): Observable<any> {
    return this.httpClient.post<Product>('http://localhost:3000/products', even);
  }
  editProduct(product: any): Observable<any> {
    return this.httpClient.patch<Product>('http://localhost:3000/products/' + product.id, product);
  }
  deleteProduct(id: any): Observable<any> {
    return this.httpClient.delete<Product>('http://localhost:3000/products/' + id);
  }

  findById(id: any): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }
}
