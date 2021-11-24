import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormTypesRoutingModule } from './form-types-routing.module'

import { FormTypesComponent } from './form-types.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'

@NgModule({
	declarations: [FormTypesComponent, SidenavComponent],
	imports: [CommonModule, FormTypesRoutingModule],
})
export class FormTypesModule {}
