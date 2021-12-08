import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContainersComponent } from './containers.component'

const routes: Routes = [
	{
		path: '',
		component: ContainersComponent,
		children: [
			{
				path: 'forms',
				loadChildren: () =>
					import('./form-types/form-types.module').then(
						(m) => m.FormTypesModule
					),
			},
			{
				path: 'pipes',
				loadChildren: () =>
					import('./pipe-types/pipe-types.module').then(
						(m) => m.PipeTypesModule
					),
			},
			{
				path: '**',
				redirectTo: 'pipes',
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ContainersRoutingModule {}
