import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user-login',
    loadComponent: () => import('./Features/Authentication/pages/signin/signin')
      .then((mod) => mod.Signin)
  },
];
