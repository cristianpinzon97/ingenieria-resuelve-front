// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FilmComponent } from './components/film/film.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { HomeComponent } from './components/home/home.component';

// Pipes
import { TruncatePipePipe } from './pipes/truncate-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilmComponent,
    NavbarComponent,
    CardsComponent,
    LoadingComponent,
    TruncatePipePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
