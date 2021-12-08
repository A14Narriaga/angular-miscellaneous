import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: 'forms',
		loadChildren: () =>
			import('./containers/form-types/form-types.module').then(
				(m) => m.FormTypesModule
			),
	},
	{
		path: 'pipes',
		loadChildren: () =>
			import('./containers/pipe-types/pipe-types.module').then(
				(m) => m.PipeTypesModule
			),
	},
	{
		path: '**',
		redirectTo: 'forms',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
