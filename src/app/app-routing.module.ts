import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CvPageComponent } from './cv-page/cv-page.component';
const routes: Routes = [

  {path: 'cv', component: CvPageComponent},
  {path: 'experience', loadChildren: () => import('./experiences/experiences.module').then(m => m.ExperiencesModule)},
  {path: 'competence', loadChildren: () => import('./competences/competences.module').then(m => m.CompetencesModule)},
  {path: 'formation', loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule)}, 
  // const formations = () => import('./formations/formations.module').then(m => m.FormationsModule)},

  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'not_found', component: PageNotFoundComponent},
  {path: '**', redirectTo:'not_found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
