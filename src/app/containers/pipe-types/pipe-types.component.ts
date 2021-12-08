import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-pipe-types',
	template: `
		<section class="wrapper">
			<a routerLinkActive="active" routerLink="basics">
				Basics
			</a>
			<a routerLinkActive="active" routerLink="numbers">
				Numbers
			</a>
			<a routerLinkActive="active" routerLink="unusual">
				Unusual
			</a>
			<a routerLinkActive="active" routerLink="customs">
				Customs
			</a>
		</section>
		<router-outlet></router-outlet>
	`,
	styles: [
		`
    .wrapper
      display: flex
      justify-content: center
      align-items: center
      margin-bottom: 1rem
      a
        padding: 0 0.5rem
      .active
        border-bottom: 2px solid gray
        font-weight: 500
  `,
	],
})
export class PipeTypesComponent {}
