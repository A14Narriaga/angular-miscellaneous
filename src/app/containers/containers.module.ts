import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersComponent } from './containers.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContainersComponent
  ],
  imports: [
    CommonModule,
    ContainersRoutingModule,
    SharedModule
  ]
})
export class ContainersModule { }
