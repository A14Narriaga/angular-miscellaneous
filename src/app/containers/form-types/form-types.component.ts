import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-form-types',
  template: `
		<app-sidenav></app-sidenav>
		<section class="container">
			<router-outlet></router-outlet>
		</section>
	`,
  styles: [``],
})
export class FormTypesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
