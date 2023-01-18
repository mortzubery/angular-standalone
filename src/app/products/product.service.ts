import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = '/assets/products.json'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url)
  }
}
