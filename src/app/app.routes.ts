import { provideRouter, Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { 
      path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES) 
    },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTE) }
  ];
  
  export const appRouting = provideRouter(routes);