import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productsUrl = 'http://localhost:8000/products';

  constructor(private http:  HttpClient) { }


  getProducts() {
    return this.http.get(`${this.productsUrl}`);
  }

  getProductById(id) {
    return this.http.get(`${this.productsUrl}/${id}`);
  }

  searchByName(name) {
    return this.http.get(`${this.productsUrl}/search/${name}`);
  }

  addProduct(name, description, numberInStock, cost, supplier){
    const product = {
      name: name,
      description: description,
      numberInStock: numberInStock,
      cost: cost,
      supplier: supplier
    };
    return this.http.post(`${this.productsUrl}/add`, product);
  }


  updateProduct(id, name, description, numberInStock, cost, supplier) {
    const product = {
      name: name,
      description: description,
      numberInStock: numberInStock,
      cost: cost,
      supplier: supplier
    };
    return this.http.post(`${this.productsUrl}/update/${id}`, product);
  }

  deleteProduct(id) {
    return this.http.get(`${this.productsUrl}/delete/${id}`);
  }
}  
