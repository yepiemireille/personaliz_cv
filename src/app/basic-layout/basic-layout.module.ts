import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicLayoutRoutingModule } from './basic-layout-routing.module';
import { BasicLayoutComponent } from './basic-layout.component';
import { FormationsModule } from './formations/formations.module';


@NgModule({
  declarations: [
    BasicLayoutComponent
  ],
  imports: [
    CommonModule,
    BasicLayoutRoutingModule,
    FormationsModule
  ]
})
export class BasicLayoutModule { }
