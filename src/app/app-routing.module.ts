import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './auth/login/login.component'
import { Page404Component } from './shared/page404/page404.component'

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () =>
			import('./auth/auth.module').then(
				(m) => m.AuthModule
			),
	},
	{
		path: 'app',
		loadChildren: () =>
			import('./containers/containers.module').then(
				(m) => m.ContainersModule
			),
	},
	{
		path: '404',
		component: Page404Component,
	},
	{
		path: '**',
		redirectTo: '404',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
