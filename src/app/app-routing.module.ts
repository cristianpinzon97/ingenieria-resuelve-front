import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';

/**
 * Constants for the routing
 */
const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'home', component: HomeComponent},
  { path: 'film/:id', component: FilmComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

/**
 * Module for the routes
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
