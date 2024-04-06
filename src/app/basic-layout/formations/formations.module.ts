import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';


@NgModule({
  declarations: [
    AddFormationComponent,
    ListFormationComponent,
    EditFormationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormationsRoutingModule
  ],
  exports:[AddFormationComponent, ListFormationComponent, EditFormationComponent]
})
export class FormationsModule { } 
