import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () => import('./pages/form-types/form-types.module').then(m => m.FormTypesModule)
  },
  {
    path: '**',
    redirectTo: 'forms'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
