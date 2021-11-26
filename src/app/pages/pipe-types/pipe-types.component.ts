import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-pipe-types',
	template: `
		<p>Pipe Works !!</p>
		<p-button label="Click"></p-button>
	`,
	styleUrls: [],
})
export class PipeTypesComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
