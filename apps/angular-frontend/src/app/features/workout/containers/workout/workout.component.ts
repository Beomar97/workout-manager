import { Component, OnInit } from '@angular/core';
import { RestWorkoutService } from '../../services/rest-workout.service';

@Component({
  selector: 'fullstack-app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  constructor(private RestWorkoutService: RestWorkoutService) {}

  ngOnInit(): void {
    this.RestWorkoutService.getWorkout().subscribe((workout) => {
      console.log(workout);
    });
  }
}
