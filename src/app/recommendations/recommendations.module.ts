import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';


import { SharedModule } from '../shared/shared.module';
import { RecommendationFormComponent } from './recommendation-form/recommendation-form.component';
import { RecommendationsRoutingModule } from './recommendations-routing.module';
import { RecommendationsComponent } from './recommendations/recommendations.component';

@NgModule({
  declarations: [RecommendationsComponent, RecommendationFormComponent],

  imports: [
    CommonModule,
    RecommendationsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class RecommendationsModule { }
