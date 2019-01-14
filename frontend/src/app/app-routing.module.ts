import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './product.service';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'add', component: AddProductComponent},
  { path: 'edit/:id', component: DetailsComponent },
  { path: 'productslist', component: ProductListComponent },
  { path: 'products/search/:name', component: SearchComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
