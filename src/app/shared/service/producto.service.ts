import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  } 

  public findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  public save(product: Product): Observable<void> {
    return this.http.post<void>(`${this.url}`, product);
  }

  public update(product: Product): Observable<void> {
    return this.http.put<void>(`${this.url}/${product.id}`, product);
  }
}
