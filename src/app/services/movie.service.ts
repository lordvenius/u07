import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movie } from "../models/Movie";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesBaseUrl = 'https://api.themoviedb.org/3/search/movie';
  apiKey = 'cd16db57cbed2e6207433158cade660f';

  moviesUrl: string = `${this.moviesBaseUrl}?api_key=${this.apiKey}`;
  // &query=Jack+Reacher

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie> {
    return this.
      http.get<Movie>(`${this.moviesUrl}&query=Jack+Reacher`);
  }

  getMoviesByQuery(query): Observable<Movie> {
    return this.http.get<Movie>(`${this.moviesUrl}&query=${query}`);
  }

  movieTest(query) {
    console.log("hejhej");
  }

  /*
    deleteMovie(movie: Movie): Observable<Movie> {
      const url = `${this.moviesUrl}/${movie.id}`;
      return this.http.delete<Movie>(url, httpOptions);
    }
  
    searchMovie(movie: Movie): Observable<Movie> {
      return this.http.post<Movie>(this.moviesUrl, movie, httpOptions)
    }
  
    toggleCompleted(movie: Movie): Observable<any> {
      const url = `${this.moviesUrl}/${movie.id}`
      return this.http.put(url, movie, httpOptions);
  
    }
  */
}
