import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PipeTypesRoutingModule } from './pipe-types-routing.module'
import { PipeTypesComponent } from './pipe-types.component'
import { PrimeNGModule } from '../../prime-ng.module'
import { BasicsComponent } from './containers/basics/basics.component'
import { CustomsComponent } from './containers/customs/customs.component'
import { NumsComponent } from './containers/nums/nums.component'
import { CardComponent } from './components/card/card.component';
import { ColorPipe } from './pipes/color.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { UnusualComponent } from './containers/unusual/unusual.component';

@NgModule({
  declarations: [
    PipeTypesComponent,
    BasicsComponent,
    CustomsComponent,
    NumsComponent,
    UnusualComponent,
    CardComponent,
    ColorPipe,
    SecureDomPipe,
  ],
  imports: [
    CommonModule,
    PipeTypesRoutingModule,
    PrimeNGModule,
  ],
})
export class PipeTypesModule { }
