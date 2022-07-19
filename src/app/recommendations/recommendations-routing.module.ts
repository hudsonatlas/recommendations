import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecommendationFormComponent } from './recommendation-form/recommendation-form.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

const routes: Routes = [
  { path: '', component: RecommendationsComponent },
  { path: 'new', component: RecommendationFormComponent },
  { path: 'edit/:id', component: RecommendationFormComponent },
  { path: 'del/:id', component: RecommendationFormComponent },
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationsRoutingModule { }
