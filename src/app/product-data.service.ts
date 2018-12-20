import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  url: string = ""

  getProduct(): Observable<Product>{
    return this.http.get<Product[]>(this.url)
  }

  constructor(private http: HttpClient) { }
}
