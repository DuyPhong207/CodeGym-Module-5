import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {FacilityComponent} from './facility.component';


const routes: Routes = [
  {
    path: 'facility', component: FacilityComponent, children: [
      {path: '', component: FacilityListComponent},
      {path: 'create', component: FacilityCreateComponent},
      {path: 'edit/:id', component: FacilityUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
