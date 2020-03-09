import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActorService } from "../../services/actor.service";
import { Actor } from "../../models/Actor";
import { ActorComponent } from "../actor/actor.component";

@Component({
  selector: 'app-search-actor',
  templateUrl: './search-actor.component.html',
  styleUrls: ['./search-actor.component.css']
})
export class SearchActorComponent implements OnInit {
  @Output() searchActor: EventEmitter<any> = new EventEmitter();

  actors: Actor[];

  person: string;

  constructor(private actorService: ActorService, private actorComponent: ActorComponent) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.actorComponent.getActorsByQuery(this.person);

  }

}












