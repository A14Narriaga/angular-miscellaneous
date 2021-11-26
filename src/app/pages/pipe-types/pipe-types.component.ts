import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
	selector: 'app-pipe-types',
	template: `
		<p-tabMenu
			[model]="items"
			[activeItem]="activeItem"></p-tabMenu>
		<router-outlet></router-outlet>
	`,
	styleUrls: [],
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
