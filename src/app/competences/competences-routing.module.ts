import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompetenceComponent } from './list-competence/list-competence.component';
import { AddCompetenceComponent } from './add-competence/add-competence.component';
import { EditCompetenceComponent } from './edit-competence/edit-competence.component';

const routes: Routes = [
  {path: 'list', component: ListCompetenceComponent},
  {path: 'add', component: AddCompetenceComponent},
  {path: 'edit', component: EditCompetenceComponent},
  {path: '', redirectTo:'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetencesRoutingModule { }
