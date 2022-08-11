import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersComponent } from './containers.component';
import { SharedModule } from '../shared/shared.module';
import { LifeCyclesComponent } from './life-cycles/pages/life-cycles/life-cycles.component';


@NgModule({
  declarations: [
    ContainersComponent,
    LifeCyclesComponent
  ],
  imports: [
    CommonModule,
    ContainersRoutingModule,
    SharedModule
  ]
})
export class ContainersModule { }
