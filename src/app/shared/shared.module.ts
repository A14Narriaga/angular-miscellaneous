import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component'

import { PrimeNGModule } from '../prime-ng.module'

@NgModule({
	declarations: [NavbarComponent],
	imports: [CommonModule, RouterModule, PrimeNGModule],
	exports: [NavbarComponent],
})
export class SharedModule {}
