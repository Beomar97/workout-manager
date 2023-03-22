import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from '@fullstack-app/types';

@Injectable({
  providedIn: 'root',
})
export class RestWorkoutService {
  constructor(private httpClient: HttpClient) {}

  getWorkout(): Observable<Workout> {
    return this.httpClient.get<Workout>('/api/workout');
  }
}
