import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormReactiveComponent } from './pages/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './pages/form-template/form-template.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'reactive',
        component: FormReactiveComponent
      },
      {
        path: 'template',
        component: FormTemplateComponent
      },
      {
        path: '**',
        component: ErrorPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTypesRoutingModule { }