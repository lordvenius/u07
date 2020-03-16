import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MovieService } from "../../services/movie.service";
import { Movie } from 'src/app/models/Movie';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})


export class MovieItemComponent implements OnInit {
  imageUrl: string = "https://image.tmdb.org/t/p/original";
  public credits: object;
  public display = true;

  public movieInfoDisplay = {
    "hide-info": this.display

  }

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
  getCredits() {
    this.movieService.getMovieCredits(this.movie.id).subscribe(response => {
      this.credits = response.cast;
      console.log(this.credits);
    });

  }



  public showInfo() {

    this.getCredits();
    if (this.display == true) {
      this.movieInfoDisplay["hide-info"] = false;
      this.display = false;
    } else if (this.display == false) {
      this.movieInfoDisplay["hide-info"] = true;
      this.display = true;
    } else {
      return
    }


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
