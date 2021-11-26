import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PipeTypesComponent } from './pipe-types.component'

const routes: Routes = [
	{
		path: '',
		component: PipeTypesComponent,
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PipeTypesRoutingModule {}
