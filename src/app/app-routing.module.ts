import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTemplateComponent } from './containers/form-template/form-template.component';
import { FormReactiveComponent } from './containers/form-reactive/form-reactive.component';

const routes: Routes = [
  {
    path: 'template',
    component: FormTemplateComponent
  },
  {
    path: 'reactive',
    component: FormReactiveComponent
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
