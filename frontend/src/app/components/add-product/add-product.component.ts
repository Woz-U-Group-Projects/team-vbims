import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  createForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      numberInStock: '',
      cost: '',
      supplier: ''
    });
  }

  addProduct(name, description, numberInStock, cost, supplier) {
    this.productService.addProduct(name, description, numberInStock, cost, supplier).subscribe(() => {
      this.router.navigate(['/productslist']);
    });
  }

  ngOnInit() {
  }

}
