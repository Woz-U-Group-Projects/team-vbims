import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { ProductService } from '../../product.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: String;
  product: any = {};
  updateForm: FormGroup;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
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
      })
    })
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
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
    });
  }

}
