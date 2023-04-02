import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VocabularyComponent} from "./component/dictionary/vocabulary/vocabulary.component";
import {DetailComponent} from "./component/dictionary/detail/detail.component";
import {ListComponent} from "./component/product/list/list.component";
import {UpdateComponent} from "./component/product/update/update.component";
import {CreateComponent} from "./component/product/create/create.component";


const routes: Routes = [
  {path: 'vocabulary', component: VocabularyComponent},
  {path: 'vocabulary/detail/:id', component: DetailComponent},
  {path: 'product', component: ListComponent},
  {path: 'product/create', component: CreateComponent},
  {path: 'product/edit/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
