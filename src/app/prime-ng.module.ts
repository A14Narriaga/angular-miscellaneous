import { NgModule } from '@angular/core'

import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import { RippleModule } from 'primeng/ripple'
import { SlideMenuModule } from 'primeng/slidemenu'
import { TabMenuModule } from 'primeng/tabmenu'

@NgModule({
	exports: [
		ButtonModule,
		MenubarModule,
		RippleModule,
		SlideMenuModule,
		TabMenuModule,
	],
})
export class PrimeNGModule {}
