import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MovieService } from "../../services/movie.service";
import { Movie } from 'src/app/models/Movie';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  @Output() deleteMovie: EventEmitter<Movie> = new EventEmitter();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      movie: true,
      //"is-complete": this.movie.completed
    }
    return classes;
  }
  /*
    onToggle(movie) {
      movie.completed = !movie.completed;
      this.movieService.toggleCompleted(movie).subscribe(movie => console.log(movie));
    }
  
    onDelete(movie) {
      this.deleteMovie.emit(movie);
    }
  */
}
