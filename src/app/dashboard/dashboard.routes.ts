import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

export const DASHBOARD_ROUTE: Routes = [
    { path: '', component: DashboardComponent,
      children: [
        { path: 'facturas', loadChildren: () => import('./facturas/facturas.routes').then(m => m.FACTURAS_ROUTE) },
        { path: 'clientes', loadChildren: () => import('./clientes/clientes.routes').then(m => m.CLIENTES_ROUTE) },
        // { path: 'proveedores', loadChildren: () => import('./proveedores/proveedores.routes').then(m => m.PROVEEDORES_ROUTE) },
        // { path: 'reportes', loadChildren: () => import('./reportes/reportes.routes').then(m => m.REPORTES_ROUTE) },
        // { path: 'configuracion', loadChildren: () => import('./configuracion/configuracion.routes').then(m => m.CONFIGURACION_ROUTE) }
  
      ]
    }
  ];