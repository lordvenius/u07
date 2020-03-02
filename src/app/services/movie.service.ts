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

  moviesUrl: string = "https://jsonplaceholder.typicode.com/todos";
  moviesLimit = "?_limit=5"

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.
      http.get<Movie[]>(`${this.moviesUrl}${this.moviesLimit}`);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    const url = `${this.moviesUrl}/${movie.id}`;
    return this.http.delete<Movie>(url, httpOptions);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, httpOptions)
  }

  toggleCompleted(movie: Movie): Observable<any> {
    const url = `${this.moviesUrl}/${movie.id}`
    return this.http.put(url, movie, httpOptions);

  }
}
