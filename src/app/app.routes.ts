import { provideRouter, Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Redirige a Login
    { 
      path: 'auth', 
      loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES) 
    },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
  ];
  
  export const appRouting = provideRouter(routes);