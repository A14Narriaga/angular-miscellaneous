import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from './pages/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './pages/form-template/form-template.component';
import { FormTypesRoutingModule } from './formTypes-routing.module';

@NgModule({
  declarations: [
    FormReactiveComponent,
    FormTemplateComponent
  ],
  imports: [
    CommonModule,
    FormTypesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormsTypesModule { }
