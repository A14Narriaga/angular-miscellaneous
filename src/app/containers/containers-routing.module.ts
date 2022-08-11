import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContainersComponent } from './containers.component'
import { LifeCyclesComponent } from './life-cycles/pages/life-cycles/life-cycles.component';

const routes: Routes = [
  {
    path: '',
    component: ContainersComponent,
    children: [
      {
        path: 'forms',
        loadChildren: () =>
          import('./form-types/form-types.module').then(
            (m) => m.FormTypesModule
          ),
      },
      {
        path: 'pipes',
        loadChildren: () =>
          import('./pipe-types/pipe-types.module').then(
            (m) => m.PipeTypesModule
          ),
      },
      {
        path: 'life-cycles',
        component: LifeCyclesComponent
      },
      {
        path: '**',
        redirectTo: 'life-cycles',
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainersRoutingModule { }
