import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.css']
})
export class RecommendationFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      id: [],
      title: [],
      description: [],
      friend_id: [],
      status: [],
      created_at: [],
      updated_at: [],
      friend: {
          id: [],
          name: [],
          cpf: [],
          email: [],
          phone: [],
          created_at: [],
          updated_at: [],
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onCancel() {
    this.form.reset();
  }

}
