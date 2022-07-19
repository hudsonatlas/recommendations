import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recommendations', pathMatch: 'full' },
  { 
    path: 'recommendations',
    loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
