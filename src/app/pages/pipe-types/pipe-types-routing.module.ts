import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PipeTypesComponent } from './pipe-types.component'
import { BasicsComponent } from './containers/basics/basics.component';
import { NumsComponent } from './containers/nums/nums.component';
import { NoCommonsComponent } from './containers/no-commons/no-commons.component';
import { CustomsComponent } from './containers/customs/customs.component';

const routes: Routes = [
	{
		path: '',
		component: PipeTypesComponent,
		children: [
			{
				path: '',
				component: BasicsComponent,
			},
			{
				path: 'numbers',
				component: NumsComponent,
			},
      {
				path: 'no-commons',
				component: NoCommonsComponent,
			},
      {
				path: 'customs',
				component: CustomsComponent,
			},
			{
				path: '**',
				redirectTo: '',
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PipeTypesRoutingModule {}
