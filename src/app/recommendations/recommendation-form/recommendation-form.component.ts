import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { RecommendationsService } from '../services/recommendations.service';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.css']
})
export class RecommendationFormComponent implements OnInit {
  submitted = false;
  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private service: RecommendationsService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    
    this.form = this.formBuilder.group({
      id: [],
      title: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(255)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(255)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('[0-9]*')])],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];

        const recommendation$ = this.service.find(id);
        recommendation$.subscribe(recommendation => {
          this.updateForm(recommendation)
        }
      );
    });
  }

  
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');

      if (this.form.value.id) {
        this.service.update(this.form.value).subscribe(
          success => this.onSuccess(),
          error => this.onError(error)
        );
      } else {
        this.service.save(this.form.value).subscribe(
          success => this.onSuccess(),
          error => this.onError(error)
        );
      }
  }
}

  updateForm(recommendation: any) {
    this.form.patchValue({
      id: recommendation.id,
      title: recommendation.title,
      description: recommendation.description,
      name: recommendation.friend.name,
      cpf: recommendation.friend.cpf,
      email: recommendation.friend.email,
      phone: recommendation.friend.phone,
    });
  }

  onSuccess() {
    this.snackBar.open('Recomendação criada com sucesso', 'x', { duration: 5000 });
    this.router.navigateByUrl('/recommendations');
  }

  onCancel() {
    this.location.back();
  }

  onError(error: any) {
    let err = error.error.error;
    for(var k in err) {
      var k: string = err[k][0];        
      this.snackBar.open(k, 'x', { duration: 3000 });
    }  
  }
}
