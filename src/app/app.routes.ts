import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user-login',
    loadComponent: () => import('./Features/Authentication/pages/signin/signin')
      .then((mod) => mod.Signin)
  },
  {
    path: 'user-register',
    loadComponent: () => import('./Features/Authentication/pages/signup/signup')
      .then((mod) => mod.Signup)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./Features/Authentication/pages/forgot-password/forgot-password')
      .then((mod) => mod.ForgotPassword)
  },
  {
    path: '',
    loadComponent: () => import('./Features/Dashboard/pages/dashboard/dashboard')
      .then((mod) => mod.Dashboard)
  }
];
