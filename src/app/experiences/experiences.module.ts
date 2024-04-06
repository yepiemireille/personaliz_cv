import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

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
    DropdownModule,
    FormsModule,
    ExperiencesRoutingModule,
    TableModule
    
  ]
})
export class ExperiencesModule { }
