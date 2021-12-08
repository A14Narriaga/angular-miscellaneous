import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unusual',
  templateUrl: './unusual.component.html',
  styleUrls: ['./unusual.component.sass']
})
export class UnusualComponent {

  gender: string = 'M'
  genderMap = {
    'M': 'invitarlo',
    'F': 'invitarla',
  }

  clients: number = 0
  clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes',
  }

  things: string[] = ['table', 'ring', 'cup', 'clothes', 'boat']

  person = {
    name: 'Alan',
    age: '25',
    address: 'Mexico, CDMX'
  }

  observable = interval(1000);
  promise = new Promise((res, err) => {
    setTimeout(() => {
      res('End of promise')
    }, 3500);
  })

}
