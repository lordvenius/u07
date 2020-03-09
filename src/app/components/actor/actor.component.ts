import { Component, OnInit } from '@angular/core';
import { ActorService } from "../../services/actor.service"
import { Actor } from "../../models/Actor"

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actors: Actor[];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
  }

  getActorsByQuery(query) {
    this.actorService.getActorsByQuery(query).subscribe(response => {

      console.log(response.results);

      this.actors = response.results;
    });
  }

}
