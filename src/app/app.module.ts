import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { PasswordResetPageComponent } from './password-reset-page/password-reset-page.component';
import { OutOfStockPageComponent } from './out-of-stock-page/out-of-stock-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultPageComponent,
    PasswordResetPageComponent,
    OutOfStockPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
