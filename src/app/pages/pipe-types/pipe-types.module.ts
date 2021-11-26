import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PipeTypesRoutingModule } from './pipe-types-routing.module'
import { PipeTypesComponent } from './pipe-types.component'

import { ButtonModule } from 'primeng/button'

@NgModule({
	declarations: [PipeTypesComponent],
	imports: [
		CommonModule,
		PipeTypesRoutingModule,
		ButtonModule,
	],
})
export class PipeTypesModule {}
