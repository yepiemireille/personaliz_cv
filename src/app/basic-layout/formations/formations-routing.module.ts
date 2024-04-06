import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';

const routes: Routes = [
  {path: '', component: ListFormationComponent},
  {path: 'create', component: AddFormationComponent},
  {path: 'edit', component: AddFormationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationsRoutingModule { } 
