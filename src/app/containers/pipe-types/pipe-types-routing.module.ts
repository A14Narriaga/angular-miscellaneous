import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PipeTypesComponent } from './pipe-types.component'
import { BasicsComponent } from './pages/basics/basics.component';
import { NumsComponent } from './pages/nums/nums.component';
import { UnusualComponent } from './pages/unusual/unusual.component';
import { CustomsComponent } from './pages/customs/customs.component';

const routes: Routes = [
  {
    path: '',
    component: PipeTypesComponent,
    children: [
      {
        path: 'basics',
        component: BasicsComponent,
      },
      {
        path: 'numbers',
        component: NumsComponent,
      },
      {
        path: 'unusual',
        component: UnusualComponent,
      },
      {
        path: 'customs',
        component: CustomsComponent,
      },
      {
        path: '**',
        redirectTo: 'basics',
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipeTypesRoutingModule { }
