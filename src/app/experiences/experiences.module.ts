import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences.component';
import { ListExperienceComponent } from './list-experience/list-experience.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';


@NgModule({
  declarations: [
    ExperiencesComponent,
    ListExperienceComponent,
    EditExperienceComponent,
    AddExperienceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExperiencesRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CardModule,
    InputTextModule,
    DynamicDialogModule
    
  ]
})
export class ExperiencesModule { }
