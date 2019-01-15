import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Product } from '../../product.model';
import { ProductService } from 'src/app/product.service';

export interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  filters: Filter[] =[
    {value: "name", viewValue: "Product Name"},
    {value: "id",  viewValue: "Product ID"}
  ];

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
    this.router.navigate([`/details/${_id}`]);
  }

  deleteProduct(_id) {
    this.productService.deleteProduct(_id).subscribe(() => {
      this.fetchProducts();
    });
  }

  searchBy(searchValue, filter) {

    console.log(filter);

    if (filter == "name") {
      this.productService.searchByName(searchValue).subscribe
      this.router.navigate([`/products/search-name/${searchValue}`]);
    }
    if (filter == "id") {
      this.productService.searchById(searchValue).subscribe
      this.router.navigate([`products/search-id/${searchValue}`]);
    };
  };

}
