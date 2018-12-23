import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomePageInventorySpecialistComponent } from './home-page-inventory-specialist.component';
import { HomePageInventorySpecialistComponent } from './Components/home-page-inventory-specialist.component';

@NgModule({
  declarations: [HomePageInventorySpecialistComponent],
  imports: [
    CommonModule, HomePageInventorySpecialistComponent
  ]
})
export class HomePageInventorySpecialistModule { }
