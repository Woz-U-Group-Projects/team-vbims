import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  url: string = "https://ec2-3-17-5-151.us-east-2.compute.amazonaws.com";

  


  getProduct(): Observable<Product>{
    return this.http.get<Product>(this.url)
    
  }

}
