import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service"
import { Movie } from "../../models/Movie"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
    console.log(this.movies);
  }

  deleteMovie(movie: Movie) {
    // ui
    this.movies = this.movies.filter(t => t.id !== movie.id);
    // server
    this.movieService.deleteMovie(movie).subscribe();
  }

  addMovie(movie: Movie) {
    this.movieService.addMovie(movie).subscribe(movie => {
      this.movies.push(movie);
    })
  }

}
