import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Product } from '../../product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  searchForm: FormGroup;
  products: Product[];
  displayedColumns = ['_id', 'name', 'description', 'numberInStock', 'cost', 'supplier'];

  constructor(public productService: ProductService, public router: Router, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: ''
    });
  }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService
    .getProducts()
    .subscribe((data: Product[]) => {
      this.products = data;
      console.log('Data requested ... ');
      console.log(this.products);
    });
  }

  editProduct(_id) {
    this.router.navigate([`/edit/${_id}`]);
  }

  deleteProduct(_id) {
    this.productService.deleteProduct(_id).subscribe(() => {
      this.fetchProducts();
    });
  }

  searchByName(name) {
    this.productService.searchByName(name).subscribe
    this.router.navigate([`/products/search/${name}`]);
  }

}
