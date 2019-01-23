import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../../product.model';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})

export class SearchByIdComponent implements OnInit {

  id: String;
  products: Product[];
  displayedColumns = ['_id', 'name', 'description', 'numberInStock', 'cost', 'supplier'];

  constructor(public productService: ProductService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.fetchProducts();
  }

  fetchProducts() {
    this.productService
    .searchById(this.id)
    .subscribe((data: Product[]) => {
      this.products = data;
      console.log('Data requested ... ');
      console.log(this.products);
    });
  }

  editProduct(_id) {
    this.router.navigate([`/details/${_id}`]);
  }

}
