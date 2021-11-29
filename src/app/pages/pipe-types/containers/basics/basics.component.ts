import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-basics',
	templateUrl: './basics.component.html',
	styleUrls: ['./basics.component.sass'],
})
export class BasicsComponent implements OnInit {
	text: string = 'ExAmPlE TeXt'
  today: Date = new Date()

	constructor() {}

	ngOnInit(): void {}
}
