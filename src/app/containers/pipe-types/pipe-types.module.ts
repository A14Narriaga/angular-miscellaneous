import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PipeTypesRoutingModule } from './pipe-types-routing.module'
import { PipeTypesComponent } from './pipe-types.component'
import { BasicsComponent } from './pages/basics/basics.component'
import { CustomsComponent } from './pages/customs/customs.component'
import { NumsComponent } from './pages/nums/nums.component'
import { UnusualComponent } from './pages/unusual/unusual.component';
import { CardComponent } from './components/card/card.component';
import { ColorPipe } from './pipes/color.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';

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
  ],
})
export class PipeTypesModule { }
