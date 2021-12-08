import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-containers',
	template: `
		<app-navbar></app-navbar>
		<router-outlet></router-outlet>
	`,
	styles: [''],
})
export class ContainersComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
