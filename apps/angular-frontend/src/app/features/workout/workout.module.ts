import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './containers/workout/workout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WorkoutComponent],
  imports: [CommonModule, WorkoutRoutingModule, HttpClientModule],
})
export class WorkoutModule {}
