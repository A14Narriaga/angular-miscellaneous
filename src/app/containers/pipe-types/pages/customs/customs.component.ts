import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styleUrls: ['./customs.component.sass']
})

export class CustomsComponent {
  heros: Hero[] = [
    {
      name: 'Spiderman',
      colorId: Color.red,
      urlVideo: 'https://www.youtube.com/embed/acfcFe2wrmo'
    },
    {
      name: 'Captain America',
      colorId: Color.blue,
      urlVideo: 'https://www.youtube.com/embed/BOKsqwLaI64'
    },
    {
      name: 'Hulk',
      colorId: Color.green,
      urlVideo: 'https://www.youtube.com/embed/lWGRYTGzLBE'
    },
    {
      name: 'Hawkeye',
      colorId: Color.purple,
      urlVideo: 'https://www.youtube.com/embed/K9qdShjyCbQ'
    }
  ]
}
