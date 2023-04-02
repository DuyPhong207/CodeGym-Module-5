import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./product.component";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";


const routes: Routes = [
  {
    path: 'product', component: ProductComponent, children: [
      {path: '', component: ListComponent},
      {path: 'create', component: CreateComponent},
      {path: 'edit/:id', component: UpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
