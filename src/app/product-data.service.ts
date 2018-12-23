import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product';



@Injectable()
export class ServiceNameService {
  
  constructor(private http: HttpClient) { }

}

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  url: string = "https://localhost:3000/products";

  


  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
    
  }

}
