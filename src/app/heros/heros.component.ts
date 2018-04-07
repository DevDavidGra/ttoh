import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../HEROS';
import {HeroService} from '../hero.service';

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

  constructor(private heroService: HeroService) {
    // this.hero.id = 1;
    // this.hero.name = 'WindStorm';
    // 2) 서비스를 생성자로 주입되면 사용하기만 하면 된다.. 아래처럼 일일히 객체마다 주입할 필요없이. 생성하면서 처리하도록 한다.
    // this.heros = this.heroService.getHeros();
  }

  ngOnInit() {
    // 서비스 호출구문
    // 1) 잘못된 방법 : 의존성이 생긴다. 컴포넌트가 서비스를 제어한다.
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeros();
    this.heroService.getHeros().subscribe(data => {
      this.heros = data;
    });
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

}
