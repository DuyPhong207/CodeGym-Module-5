import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractUpdateComponent} from './contract-update/contract-update.component';
import {ContractComponent} from './contract.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    ContractCreateComponent,
    ContractListComponent,
    ContractUpdateComponent,
    ContractComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ContractModule { }
