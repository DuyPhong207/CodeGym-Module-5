import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { LoginComponent } from './component/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateFormComponent } from './component/create-form/create-form.component';
import { CountDownComponent } from './component/count-down/count-down.component';
import { VocabularyComponent } from './component/dictionary/vocabulary/vocabulary.component';
import { DetailComponent } from './component/dictionary/detail/detail.component';
import { ListComponent } from './component/product/list/list.component';
import { UpdateComponent } from './component/product/update/update.component';
import { HttpClientModule} from "@angular/common/http";
import { CreateComponent } from './component/product/create/create.component';
import { RatingBarComponent } from './component/rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    LoginComponent,
    CreateFormComponent,
    CountDownComponent,
    VocabularyComponent,
    DetailComponent,
    ListComponent,
    UpdateComponent,
    CreateComponent,
    RatingBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
