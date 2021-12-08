import { Component } from '@angular/core'

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.sass'],
})
export class SidenavComponent {
	items = [
		{
			label: 'Template',
			icon: 'pi pi-fw pi-file',
			items: [
				{
					label: 'Basics',
					icon: 'pi pi-fw pi-plus',
					routerLink: './template/',
				},
				{
					label: 'Dinamics',
					icon: 'pi pi-fw pi-plus',
					routerLink: './template/dinamics',
				},
				{
					label: 'Switches',
					icon: 'pi pi-fw pi-plus',
					routerLink: './template/switches',
				},
			],
		},
		{
			label: 'Reactive',
			icon: 'pi pi-fw pi-pencil',
			items: [
				{
					label: 'Basics',
					icon: 'pi pi-fw pi-plus',
					routerLink: './reactive/',
				},
				{
					label: 'Dinamics',
					icon: 'pi pi-fw pi-plus',
					routerLink: './reactive/dinamics',
				},
				{
					label: 'Switches',
					icon: 'pi pi-fw pi-plus',
					routerLink: './reactive/switches',
				},
			],
		},
	]
}
