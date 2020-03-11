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


  public display = true;

  public movieInfoDisplay = {
    "hide-info": this.display

  }

  @Input() actor: Actor;

  constructor(private actorService: ActorService, private movieService: MovieService) { }



  ngOnInit(): void {
  }





  setClasses() {
    let classes = {
      movie: true,
      //"is-complete": this.movie.completed
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



}
