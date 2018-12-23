import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { HomePageDefaultComponent } from './home-page-default/Components/home-page-default.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'search-results', component: SearchResultPageComponent },
  { path: 'homepage', component: HomePageDefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
