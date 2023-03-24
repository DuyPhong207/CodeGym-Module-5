import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerUpdateComponent} from './component/customer/customer-update/customer-update.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';


const routes: Routes = [
  {path: 'edit/:id', component: CustomerUpdateComponent},
  {path: '', component: CustomerListComponent},
  {path: 'create', component: CustomerCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
