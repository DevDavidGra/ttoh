import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HEROS} from "../HEROS";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'

  };*/
  // hero = new Hero();
  heros = HEROS;

  constructor() {
    // this.hero.id = 1;
    // this.hero.name = 'WindStorm';
  }

  ngOnInit() {
  }

}
