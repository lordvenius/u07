import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "./components/movies/movies.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { Top100Component } from "./components/pages/top100/top100.component";
import { ActorComponent } from './components/actor/actor.component';


const routes: Routes = [
  { path: "", component: MoviesComponent },
  { path: "actor", component: ActorComponent },
  { path: "about", component: AboutComponent },
  { path: "top100", component: Top100Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
