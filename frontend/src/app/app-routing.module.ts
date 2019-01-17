import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import { SearchByIdComponent } from './components/search-by-id/search-by-id.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'add', component: AddProductComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'productslist', component: ProductListComponent },
  { path: 'products/search-name/:name', component: SearchByNameComponent},
  { path: 'products/search-id/:id', component: SearchByIdComponent },  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
