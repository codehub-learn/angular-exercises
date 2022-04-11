import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeDirectivesModule } from './attribute-directives/attribute-directives.module';
import { BasicFormsModule } from './basic-forms/basic-forms.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { ServicesModule } from './services/services.module';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { WrapperModule } from './wrapper/wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WrapperModule,
    LifecycleModule,
    StructuralDirectivesModule,
    AttributeDirectivesModule,
    ServicesModule,
    BasicFormsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
