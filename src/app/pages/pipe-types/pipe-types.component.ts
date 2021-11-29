import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
	selector: 'app-pipe-types',
	template: `
		<div class="wrapper">
			<p-tabMenu
				class="options"
				[model]="items"
				[activeItem]="activeItem"></p-tabMenu>
		</div>
		<section class="container">
			<router-outlet></router-outlet>
		</section>
	`,
	styles: [
		`
    .wrapper
      background-color: var(--surface-a)
      padding: 0.5rem 0 1rem 0
      border-radius: 0.3rem
      .options
        display: flex
        justify-content: center
    .container
      max-width: 1024px
      margin: 0 auto
  `,
	],
})
export class PipeTypesComponent implements OnInit {
	items!: MenuItem[]
	activeItem!: MenuItem

	constructor() {}

	ngOnInit(): void {
		this.items = [
			{
				label: 'Basics',
				icon: 'pi pi-align-left',
				routerLink: './',
			},
			{
				label: 'Numbers',
				icon: 'pi pi-dollar',
				routerLink: './numbers',
			},
			{
				label: 'Not Commons',
				icon: 'pi pi-globe',
				routerLink: './no-commons',
			},
			{
				label: 'Customs',
				icon: 'pi pi-cog',
				routerLink: './customs',
			},
		]
		this.activeItem = this.items[0]
	}
}
