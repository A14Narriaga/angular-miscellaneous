import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-form-types',
	template: `
		<section class="d-flex">
			<app-sidenav></app-sidenav>
			<div class="container p-4">
				<router-outlet></router-outlet>
			</div>
		</section>
	`,
	styleUrls: [],
})
export class FormTypesComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
