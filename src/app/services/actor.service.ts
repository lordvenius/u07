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
export class ActorService {

  searchByPersonUrl = "https://api.themoviedb.org/3/search/person";
  apiKey = 'cd16db57cbed2e6207433158cade660f';

  constructor(private http: HttpClient) { }

  getActorsByQuery(query): Observable<Movie> {
    return this.http.get<Movie>(`${this.searchByPersonUrl}?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
  }
}
