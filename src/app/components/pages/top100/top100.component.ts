import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../../services/movie.service"
import { Movie } from "../../../models/Movie"

@Component({
  selector: 'app-top100',
  templateUrl: './top100.component.html',
  styleUrls: ['./top100.component.css']
})
export class Top100Component implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  getBestMovies() {
    this.movieService.getBestMovies().subscribe(response => {

      this.movies = response.results;
    });
  }

  getWorstMovies() {

  }

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe(response => {

      this.movies = response.results;
    });
  }

}
