import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `
		<section>
			<router-outlet></router-outlet>
		</section>
	`,
	styles: [
		`
    section
      padding: 1rem
  `,
	],
})
export class AppComponent {
	title = 'angular-miscellaneous'
}
