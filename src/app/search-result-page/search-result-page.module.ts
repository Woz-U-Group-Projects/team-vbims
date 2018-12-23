import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDataService } from '../product-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SearchResultPageModule { private productDataService: ProductDataService}

