import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'workout',
    loadChildren: () => import('./features/workout/workout.module').then((m) => m.WorkoutModule),
  },
  {
    path: '**',
    redirectTo: 'workout',
  },
];
