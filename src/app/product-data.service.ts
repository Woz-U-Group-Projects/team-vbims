import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  url: string = ""

  constructor(private http: HttpClient) { }
}
