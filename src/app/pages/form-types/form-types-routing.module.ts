import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTypesComponent } from './form-types.component';

const routes: Routes = [
  {
    path: '',
    component: FormTypesComponent,
    children: [
      {
        path: 'template',
        loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
      },
      {
        path: 'reactive',
        loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)
      },
      {
        path: '**',
        redirectTo: 'template'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormTypesRoutingModule { }
