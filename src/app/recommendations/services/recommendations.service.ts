import { Injectable } from '@angular/core';
import { Recommendations } from '../models/recommendations';
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  private readonly API = 'api/recommendations';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Recommendations[]>(this.API)
    .pipe(
      first(),
      // tap(data => console.log(data)),
    );
  }
}
