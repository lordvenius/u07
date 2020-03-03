import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieService } from "../../services/movie.service";
import { Movie } from "../../models/Movie";
import { MoviesComponent } from "../movies/movies.component";


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  @Output() searchMovie: EventEmitter<any> = new EventEmitter();


  movies: Movie[];

  title: string;


  constructor(private movieService: MovieService, private moviesComponent: MoviesComponent) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.moviesComponent.movieTest(this.title);
    /*
        this.movieService.getMoviesByQuery(this.title).subscribe(response => {
          console.log(response.results);
          this.movies = response.results;
        });
    */
  }

}
