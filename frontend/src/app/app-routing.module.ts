import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './product.service';

const routes: Routes = [
  {path:'add', component: AddProductComponent},
  { path: 'edit/:id', component: EditProductComponent },
  { path: 'productslist', component: ProductListComponent },
  { path: '', redirectTo: 'productslist', pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
