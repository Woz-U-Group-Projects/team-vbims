import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../../product.model';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  name: String;
  products: Product[];
  displayedColumns = ['_id', 'name', 'description', 'numberInStock', 'cost', 'supplier'];

  constructor(public productService: ProductService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Grab the search keyword (name) from the URL
    this.route.params.subscribe(params => {
      this.name = params.name;
    });

    this.fetchProducts();
  }

  fetchProducts() {
    this.productService
    .searchByName(this.name)
    .subscribe((data: Product[]) => {
      this.products = data;
      console.log('Data requested ... ');
      console.log(this.products);
    });
  }

  editProduct(_id) {
    this.router.navigate([`/edit/${_id}`]);
  }

}
