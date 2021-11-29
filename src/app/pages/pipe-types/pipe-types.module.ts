import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PipeTypesRoutingModule } from './pipe-types-routing.module'
import { PipeTypesComponent } from './pipe-types.component'
import { PrimeNGModule } from '../../prime-ng.module'
import { BasicsComponent } from './containers/basics/basics.component'
import { CustomsComponent } from './containers/customs/customs.component'
import { NumsComponent } from './containers/nums/nums.component'
import { NoCommonsComponent } from './containers/no-commons/no-commons.component'

@NgModule({
	declarations: [
		PipeTypesComponent,
		BasicsComponent,
		CustomsComponent,
		NumsComponent,
		NoCommonsComponent,
	],
	imports: [
		CommonModule,
		PipeTypesRoutingModule,
		PrimeNGModule,
	],
})
export class PipeTypesModule {}
