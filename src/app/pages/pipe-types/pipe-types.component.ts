import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { PrimeNGConfig } from 'primeng/api'

@Component({
	selector: 'app-pipe-types',
	template: `
		<div class="wrapper mb-3">
			<p-tabMenu
				[model]="items"
				[activeItem]="activeItem"></p-tabMenu>
		</div>
		<router-outlet></router-outlet>
	`,
	styles: [
		`
    .wrapper
      background-color: var(--surface-a)
      padding: 0.5rem 0 1rem 0
      border-radius: 0.3rem
      display: flex
      justify-content: center
      align-items: center
      overflow-x: scroll
      &::-webkit-scrollbar
        display: none
  `,
	],
})
export class PipeTypesComponent implements OnInit {
	items!: MenuItem[]
	activeItem!: MenuItem

	constructor(private primengConfig: PrimeNGConfig) {}

	ngOnInit(): void {
		this.primengConfig.ripple = true
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
				label: 'Unusual',
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
