import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../HEROS';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'

  };*/
  // hero = new Hero();
  heros = HEROS;
  selectedHero: Hero;

  constructor() {
    // this.hero.id = 1;
    // this.hero.name = 'WindStorm';
  }

  ngOnInit() {

  }
  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

}
