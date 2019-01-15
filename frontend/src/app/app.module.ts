import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';

// Imports for Material Design
import { MatToolbarModule,
         MatFormFieldModule,
         MatInputModule,
         MatOptionModule,
         MatSelectModule,
         MatIconModule,
         MatButtonModule,
         MatCardModule,
         MatTableModule,
         MatDividerModule,
         MatSnackBarModule } from '@angular/material';
import { SearchByIdComponent } from './components/search-by-id/search-by-id.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    DetailsComponent,
    SearchByNameComponent,
    SearchByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
