import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormTypesComponent } from './form-types.component';
import { FormTypesRoutingModule } from './form-types-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [FormTypesComponent, SidenavComponent],
  imports: [
    CommonModule,
    FormTypesRoutingModule,
  ]
})
export class FormTypesModule { }
