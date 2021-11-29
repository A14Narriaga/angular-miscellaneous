import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
	items: MenuItem[] = [
		{
			label: 'Forms',
			icon: 'pi pi-align-justify',
			routerLink: '/forms',
		},
		{
			label: 'Pipes',
			icon: 'pi pi-desktop',
			routerLink: '/pipes',
		},
	]
}
