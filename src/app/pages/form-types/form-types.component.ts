import { Component, OnInit } from '@angular/core'
import { PrimeNGConfig } from 'primeng/api'

@Component({
	selector: 'app-form-types',
	template: `
		<app-sidenav></app-sidenav>
		<section class="container">
			<router-outlet></router-outlet>
		</section>
	`,
	styles: [
		`
    .container
      margin-top: -2.5rem
  `,
	],
})
export class FormTypesComponent implements OnInit {
	constructor(private primengConfig: PrimeNGConfig) {}

	ngOnInit(): void {
		this.primengConfig.ripple = true
	}
}
