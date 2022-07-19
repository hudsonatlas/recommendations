import { Injectable } from '@angular/core';
import { Recommendations } from '../models/recommendations';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  private readonly API_ALL = 'api/recommendations';
  private readonly API = 'api/recommendation';

  constructor(private httpClient: HttpClient) { }

  findAll() { 
    return this.httpClient.get<Recommendations[]>(this.API_ALL)
    .pipe(
      first(),
      // .tap(data => console.log(data)),
    );
  }

  find(id: number) {
    return this.httpClient.get<Recommendations>(`${this.API}/${id}`)
    .pipe(
      take(1)
    );
  }

  save(recommendation: Recommendations) {
    return this.httpClient.post<Recommendations>(this.API, recommendation)
    .pipe(
      first()
    );
  }
  update(recommendation: Recommendations) {
    return this.httpClient.put<Recommendations>(`${this.API}/${recommendation.id}`, recommendation)
    .pipe(
      first()
    );
  }

  delete(id: number) {
    return this.httpClient.delete<Recommendations>(`${this.API}/${id}`)
    .pipe(
      first()
    );
  }

  updateStatus(id: number) {
    return this.httpClient.patch<Recommendations>(`${this.API}/${id}`, id)
    .pipe(
      first()
    );
  }
}
