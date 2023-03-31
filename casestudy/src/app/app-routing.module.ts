import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerUpdateComponent} from './component/customer/customer-update/customer-update.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {FacilityListComponent} from './component/facility/facility-list/facility-list.component';
import {FacilityCreateComponent} from './component/facility/facility-create/facility-create.component';
import {FacilityUpdateComponent} from './component/facility/facility-update/facility-update.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';
import {ContractCreateComponent} from './component/contract/contract-create/contract-create.component';
import {ContractUpdateComponent} from './component/contract/contract-update/contract-update.component';
import {EmployeeListComponent} from './component/employee/employee-list/employee-list.component';
import {EmployeeCreateComponent} from './component/employee/employee-create/employee-create.component';


const routes: Routes = [
  // customer-url
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit/:id', component: CustomerUpdateComponent},
  // employee-url
  {path: 'employee', component: EmployeeListComponent},
  {path: 'employee/create', component: EmployeeCreateComponent},
  // facility-url
  {path: 'facility', component: FacilityListComponent},
  {path: 'facility/create', component: FacilityCreateComponent},
  {path: 'facility/edit/:id', component: FacilityUpdateComponent},
  // contract-url
  {path: 'contract', component: ContractListComponent},
  {path: 'contract/create', component: ContractCreateComponent},
  {path: 'contract/edit/:id', component: ContractUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
