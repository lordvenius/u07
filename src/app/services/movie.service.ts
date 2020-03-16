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
  sortMoviesBaseUrl = "https://api.themoviedb.org/3/movie"
  searchMoviesBaseUrl = 'https://api.themoviedb.org/3/search/movie';
  searchByPersonUrl = "https://api.themoviedb.org/3/search/person";
  apiKey = 'cd16db57cbed2e6207433158cade660f';
  topRated = "/top_rated?";
  bottomRated = "";
  popular = "/popular?";

  moviesUrl: string = `${this.searchMoviesBaseUrl}?api_key=${this.apiKey}`;
  // &query=Jack+Reacher

  constructor(private http: HttpClient) { }

  getMovieCredits(query): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${query}/credits?api_key=${this.apiKey}`);
  }

  getMoviesByActorName(query): Observable<Movie> {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_people=${query}`);
  }

  getMovies(): Observable<Movie> {
    return this.
      http.get<Movie>(`${this.moviesUrl}&query=Jack+Reacher`);
  }

  getMoviesByQuery(query): Observable<Movie> {
    return this.http.get<Movie>(`${this.moviesUrl}&query=${query}`);
  }

  getMoviesByPersonQuery(query): Observable<Movie> {
    return this.http.get<Movie>(`${this.searchByPersonUrl}?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
  }

  //https://api.themoviedb.org/3/search/person?api_key=cd16db57cbed2e6207433158cade660f&language=en-US&query=jim&page=1&include_adult=false

  movieTest(query) {
    console.log("hejhej");
  }

  getBestMovies(): Observable<Movie> {
    return this.http.get<Movie>(`${this.sortMoviesBaseUrl}${this.topRated}api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getWorstMovies(): Observable<Movie> {
    return this.http.get<Movie>(`${this.sortMoviesBaseUrl}${this.bottomRated}api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getPopularMovies(): Observable<Movie> {
    return this.http.get<Movie>(`${this.sortMoviesBaseUrl}${this.popular}api_key=${this.apiKey}&language=en-US&page=1`);
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

