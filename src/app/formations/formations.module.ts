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


@NgModule({
  declarations: [
    FormationsComponent,
    AddFormationComponent,
    EditFormationComponent,
    ListFormationComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormationsRoutingModule,
  ],
  providers:[FormationService],
  exports:[AddFormationComponent, EditFormationComponent, ListFormationComponent]
})
export class FormationsModule { }
