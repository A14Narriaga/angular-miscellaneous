import { Component } from '@angular/core'

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.sass'],
})

export class BasicsComponent {

  text: string = 'ExAmPlE TeXt'
  today: Date = new Date()

}
