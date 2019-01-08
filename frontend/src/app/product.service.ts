import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http:localhost:8000';

  constructor(private http:  HttpClient) { }


  getProducts() {
    return this.http.get(`${this.uri}/products`);
  }

  getProductById(id) {
    return this.http.get(`${this.uri}/products/${id}`);
  }

  addProduct(name, description, numberInStock, cost, supplier){
    const product = {
      name: name,
      description: description,
      numberInStock: numberInStock,
      cost: cost,
      supplier: supplier,
     
    };
    return this.http.post(`${this.uri}/products/add`, product);
  }
  updateProduct(id, name, description, numberInStock, cost, supplier, status) {
    const product = {
      name: name,
      description: description,
      numberInStock: numberInStock,
      cost: cost,
      supplier: supplier,
      status: status
    };
    return this.http.post(`${this.uri}/products/update/${id}`, product);
}
  deleteProduct(id) {
    return this.http.get(`${this.uri}/products/delete/${id}`);
  }
}  
