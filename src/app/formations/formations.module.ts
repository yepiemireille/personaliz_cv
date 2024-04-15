import { NgModule } from '@angular/core';

import { FormationsRoutingModule } from './formations-routing.module';
import { FormationsComponent } from './formations.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormationService } from '../core/http/formation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    FormationsComponent,
    AddFormationComponent,
    EditFormationComponent,
    ListFormationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormationsRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CardModule,
    InputTextModule,
    DynamicDialogModule
  ],
  providers:[FormationService],
  exports:[AddFormationComponent, EditFormationComponent, ListFormationComponent]
})
export class FormationsModule { }
