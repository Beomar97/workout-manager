import { TestBed } from '@angular/core/testing';

import { RestWorkoutService } from './rest-workout.service';

describe('RestWorkoutService', () => {
  let service: RestWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
