import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../product-data.service';
import { Product } from '../../product';

@Component({
  selector: 'app-home-page-default',
  templateUrl: './home-page-default.component.html',
  styleUrls: ['./home-page-default.component.css']
})
export class HomePageDefaultComponent implements OnInit {

  products: Product[];

  constructor(private productDataService: ProductDataService) {
    this.productDataService.getProducts().subscribe(p => (this.products = p));
   }

  ngOnInit() {
  }

}
