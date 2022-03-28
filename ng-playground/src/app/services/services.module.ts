import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CountriesComponent]
})
export class ServicesModule { }
