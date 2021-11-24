import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {

  menuItems: MenuItem[] = [
    {
      text: 'Basic',
      route: './template/basics'
    },
    {
      text: 'Dinamic',
      route: './template/dinamic'
    },
    {
      text: 'Switches',
      route: './template/switches'
    },
  ]

}
