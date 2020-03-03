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
    //this.movieService.getMovies().subscribe(response => {
    //this.movies = response.results;
    //});
  }

  movieTest(query) {
    console.log("då")

    this.movieService.getMoviesByQuery(query).subscribe(response => {
      console.log(response.results);
      this.movies = response.results;
    });
  }




  /*
    deleteMovie(movie: Movie) {
      // ui
      this.movies = this.movies.filter(t => t.id !== movie.id);
      // server
      this.movieService.deleteMovie(movie).subscribe();
    }
  
    searchMovie(movie: Movie) {
      this.movieService.searchMovie(movie).subscribe(movie => {
        this.movies.push(movie);
      })
    }
  */
}

