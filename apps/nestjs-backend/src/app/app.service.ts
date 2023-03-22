import { Injectable } from '@nestjs/common';
import { Workout } from '@fullstack-app/types';
@Injectable()
export class AppService {
  getWorkout(): Workout {
    return {
      id: '1',
      name: 'Chest and Triceps',
      description: 'Chest and Triceps workout',
      exercises: [],
    };
  }
}
