import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActorService } from "../../services/actor.service";
import { Actor } from 'src/app/models/Actor';
import { Movie } from "../../models/Movie";
import { MovieService } from "../../services/movie.service";
import { MoviesComponent } from "../movies/movies.component";
import { MovieItemComponent } from "../movie-item/movie-item.component"


@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
  imageUrl: string = "https://image.tmdb.org/t/p/original";
  movies: Movie[];


  public display = true;

  public movieInfoDisplay = {
    "hide-info": this.display

  }
  public actorMovieDisplay = true;
  public actorMovieInfoDisplay = {
    "hide-info": this.actorMovieDisplay

  }

  @Input() actor: Actor;

  constructor(private actorService: ActorService, private movieService: MovieService) { }



  ngOnInit(): void {
  }

  getMoviesByActorName(query) {
    this.movieService.getMoviesByActorName(query).subscribe(response => {
      console.log(response.results);
      this.movies = response.results;
      this.showInfo2();
    });
  }





  setClasses() {
    let classes = {
      movie: true,
    }
    return classes;
  }

  public showInfo() {
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

  public showInfo2() {
    if (this.actorMovieDisplay == true) {
      this.actorMovieInfoDisplay["hide-info"] = false;
      this.actorMovieDisplay = false;
    } else if (this.actorMovieDisplay == false) {
      this.actorMovieInfoDisplay["hide-info"] = true;
      this.actorMovieDisplay = true;
    } else {
      return
    }

  }



}
