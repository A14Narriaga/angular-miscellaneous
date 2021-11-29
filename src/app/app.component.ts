import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `
		<section class="p-3">
			<div class="mb-3">
				<app-navbar></app-navbar>
			</div>
			<section class="container">
				<router-outlet></router-outlet>
			</section>
		</section>
	`,
	styles: [
		`
    .container
      max-width: 1024px
      margin: 0 auto
  `,
	],
})
export class AppComponent {
	title = 'angular-miscellaneous'
}
