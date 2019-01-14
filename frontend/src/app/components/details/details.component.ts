import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { ProductService } from '../../product.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: String;
  product: any = {};
  updateForm: FormGroup;
  products: Product[];

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
    this.updateForm = fb.group({
      name: new FormControl(),
      description: new FormControl(),
      numberInStock: new FormControl(),
      cost: new FormControl(),
      supplier: new FormControl()
    })
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.productService.getProductById(this.id).subscribe(res => {
        this.product = res;
        this.updateForm.get('name').setValue(this.product.name);
        this.updateForm.get('description').setValue(this.product.description);
        this.updateForm.get('numberInStock').setValue(this.product.numberInStock);
        this.updateForm.get('cost').setValue(this.product.cost);
        this.updateForm.get('supplier').setValue(this.product.supplier);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: '',
      descripton: '',
      numberInStock: '',
      cost: '',
      supplier: ''
    });
  }

  updateProduct(name, description, numberInStock, cost, supplier) {
    this.productService.updateProduct(this.id, name, description, numberInStock, cost, supplier).subscribe(() => {
      this.snackBar.open('Product updated successfully', 'OK', {
        duration: 3000,
      });
      this.router.navigate(['/productslist']);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.fetchProducts();
      this.router.navigate(['/productslist']);
    });
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

}
