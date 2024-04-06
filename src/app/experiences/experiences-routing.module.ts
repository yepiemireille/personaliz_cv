import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExperienceComponent } from '../experiences/list-experience/list-experience.component';
import { EditExperienceComponent } from '../experiences/edit-experience/edit-experience.component';
import { AddExperienceComponent } from '../experiences/add-experience/add-experience.component';


const routes: Routes = [
  {path: 'list', component: ListExperienceComponent},
  {path: 'add', component: AddExperienceComponent},
  {path: 'edit', component: EditExperienceComponent},
  {path: '', redirectTo:'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
