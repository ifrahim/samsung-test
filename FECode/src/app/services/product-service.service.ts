import { Injectable } from '@angular/core';
import { ProductModel } from '../models/productModel';
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {map, tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: ProductModel[];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    this.products = [
      { id: 1, modelCode: 'SM-S8ABCD13', productName: 'Galaxy S3', serialNumber: 'SN00000001'},
      { id: 2, modelCode: 'SM-S8ABCD17', productName: 'Galaxy S7', serialNumber: 'SN00000002'},
      { id: 3, modelCode: 'SM-S8ABCD18', productName: 'Galaxy S8', serialNumber: 'SN00000003'},
      { id: 4, modelCode: 'SM-S8ABCD19', productName: 'Galaxy S9', serialNumber: 'SN00000004'},
      { id: 5, modelCode: 'SM-S8ABCD10', productName: 'Galaxy S10', serialNumber: 'SN00000005'}
    ];

    this.products = this.http.get('https://api.flickr.com/path').pipe(map((res) => res.data));

    return of(this.products);
  }

  handleError(arg0: string, arg1: undefined[]): (err: any, caught: Observable<ProductModel[]>) => never {
    throw new Error('Method not implemented.');
  }
}
