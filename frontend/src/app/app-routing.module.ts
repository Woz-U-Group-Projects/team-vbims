import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './product.service';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import { SearchByIdComponent } from './components/search-by-id/search-by-id.component';

const routes: Routes = [
  { path:'add', component: AddProductComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'productslist', component: ProductListComponent },
  { path: 'products/search-name/:name', component: SearchByNameComponent},
  { path: 'products/search-id/:id', component: SearchByIdComponent },  
  { path: '', redirectTo: 'productslist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
