import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component'
import { Page404Component } from './page404/page404.component'

@NgModule({
	declarations: [NavbarComponent, Page404Component],
	imports: [CommonModule, RouterModule],
	exports: [NavbarComponent, Page404Component],
})
export class SharedModule {}
