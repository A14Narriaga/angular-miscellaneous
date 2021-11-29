import { NgModule } from '@angular/core'

import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { MenubarModule } from 'primeng/menubar'
import { SlideMenuModule } from 'primeng/slidemenu'
import { TabMenuModule } from 'primeng/tabmenu'

@NgModule({
	exports: [
		ButtonModule,
		CardModule,
		MenubarModule,
		SlideMenuModule,
		TabMenuModule,
	],
})
export class PrimeNGModule {}
