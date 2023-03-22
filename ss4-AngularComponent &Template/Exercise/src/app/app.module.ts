import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { LoginComponent } from './component/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateFormComponent } from './component/create-form/create-form.component';
import { CountDownComponent } from './component/count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    LoginComponent,
    CreateFormComponent,
    CountDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
