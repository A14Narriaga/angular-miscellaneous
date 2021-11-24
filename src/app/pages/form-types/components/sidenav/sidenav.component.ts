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
      route: './template/'
    },
    {
      text: 'Dinamic',
      route: './template/dinamics'
    },
    {
      text: 'Switches',
      route: './template/switches'
    },
  ]

  menuItems2: MenuItem[] = [
    {
      text: 'Basic',
      route: './reactive/'
    },
    {
      text: 'Dinamic',
      route: './reactive/dinamics'
    },
    {
      text: 'Switches',
      route: './reactive/switches'
    },
  ]

}
