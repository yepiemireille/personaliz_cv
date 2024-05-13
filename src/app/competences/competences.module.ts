import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { CompetencesRoutingModule } from './competences-routing.module';
import { CompetencesComponent } from './competences.component';
import { ListCompetenceComponent } from './list-competence/list-competence.component';
import { EditCompetenceComponent } from './edit-competence/edit-competence.component';
import { AddCompetenceComponent } from './add-competence/add-competence.component';
import { AppModule } from '../app.module';
import { MapComponent } from '../map/map.component';


@NgModule({
  declarations: [
    CompetencesComponent,
    ListCompetenceComponent,
    EditCompetenceComponent,
    AddCompetenceComponent
  ],
  imports: [
    CommonModule,
    CompetencesRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CardModule,
    InputTextModule,
    DynamicDialogModule
  ]
})
export class CompetencesModule { }
