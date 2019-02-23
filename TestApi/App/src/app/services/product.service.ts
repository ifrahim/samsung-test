import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductModel } from '../models/productModel';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[];

  constructor(private http: HttpClient) { }


  getProducts(): Observable<ProductModel[]> {
    return this.http.get(environment.API_URL).pipe(map((response: ProductModel[]) => response));
  }
}
