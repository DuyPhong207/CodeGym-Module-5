import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';


const routes: Routes = [
  {
    path: 'customer', component: CustomerComponent, children: [
      {path: '', component: CustomerListComponent},
      {path: 'create', component: CustomerCreateComponent},
      {path: 'edit/:id', component: CustomerUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
