import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RecommendationsRoutingModule } from './recommendations-routing.module';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [RecommendationsComponent],

  imports: [
    CommonModule,
    RecommendationsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class RecommendationsModule { }
