import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from '../customer/customer.component';
import {CustomerListComponent} from '../customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from '../customer/customer-create/customer-create.component';
import {CustomerUpdateComponent} from '../customer/customer-update/customer-update.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractUpdateComponent} from './contract-update/contract-update.component';


const routes: Routes = [
  {
    path: 'contract', component: CustomerComponent, children: [
      {path: '', component: ContractListComponent},
      {path: 'create', component: ContractCreateComponent},
      {path: 'edit/:id', component: ContractUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
