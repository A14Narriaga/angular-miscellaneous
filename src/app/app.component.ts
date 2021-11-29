import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `
		<section class="p-1">
			<div class="mb-3">
				<app-navbar></app-navbar>
			</div>
			<router-outlet></router-outlet>
		</section>
	`,
	styles: [``],
})
export class AppComponent {
	title = 'angular-miscellaneous'
}
