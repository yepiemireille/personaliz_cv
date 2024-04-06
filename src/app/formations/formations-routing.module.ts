import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormationComponent } from '../basic-layout/formations/list-formation/list-formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';

const routes: Routes = [
  {path: 'list', component: ListFormationComponent},
    {path: 'add', component: AddFormationComponent},
    {path: 'edit', component: EditFormationComponent},
    {path: '', redirectTo:'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationsRoutingModule { }
