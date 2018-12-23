import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageDefaultComponent } from './Components/home-page-default.component';

import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [HomePageDefaultComponent],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class HomePageDefaultModule { }
