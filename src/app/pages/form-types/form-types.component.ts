import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-types',
  template: `
  
    <div class="row">
      <div class="col-4">
        <app-sidenav></app-sidenav>
      </div>
      <div class="col mt-4">
        <router-outlet></router-outlet>
      </div>
    </div>

  `,
  styleUrls: []
})

export class FormTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}