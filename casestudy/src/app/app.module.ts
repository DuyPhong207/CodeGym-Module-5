import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CustomerUpdateComponent } from './component/customer/customer-update/customer-update.component';
import { FacilityUpdateComponent } from './component/facility/facility-update/facility-update.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeCreateComponent } from './component/employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    HeaderComponent,
    FooterComponent,
    CustomerUpdateComponent,
    FacilityUpdateComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    ContractCreateComponent,
    ContractListComponent,
    EmployeeCreateComponent,
    EmployeeListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
