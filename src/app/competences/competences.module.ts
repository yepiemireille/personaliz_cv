import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetencesRoutingModule } from './competences-routing.module';
import { CompetencesComponent } from './competences.component';
import { ListCompetenceComponent } from './list-competence/list-competence.component';
import { EditCompetenceComponent } from './edit-competence/edit-competence.component';
import { AddCompetenceComponent } from './add-competence/add-competence.component';


@NgModule({
  declarations: [
    CompetencesComponent,
    ListCompetenceComponent,
    EditCompetenceComponent,
    AddCompetenceComponent
  ],
  imports: [
    CommonModule,
    CompetencesRoutingModule
  ]
})
export class CompetencesModule { }
