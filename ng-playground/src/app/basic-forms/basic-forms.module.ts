import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './simple-form/simple-form.component';



@NgModule({
  declarations: [
    BasicFormComponent,
    SimpleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [BasicFormComponent, SimpleFormComponent]
})
export class BasicFormsModule { }
