import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Recommendations } from '../models/recommendations';
import { RecommendationsService } from '../services/recommendations.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  
  recommendations$: Observable<Recommendations[]>;
  displayedColumns: string[] = ['id', 'title', 'description',  'status', 'actions'];

  constructor(
    private recommendationsService: RecommendationsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recommendations$ = this.recommendationsService.findAll()
    .pipe(
      catchError(err => {
        this.onError("Error ao carregar as recomendações.");
        return of([]);
      }
    ));
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
function DialogDataExampleDialog(DialogDataExampleDialog: any, arg1: { data: string; }) {
  throw new Error('Function not implemented.');
}

