import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieItemComponent,
    HeaderComponent,
    SearchMovieComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
