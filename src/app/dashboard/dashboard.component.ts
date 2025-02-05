import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule, Router} from '@angular/router';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showGraphs = true;
  facturasPorPagar: any[] = [];
  facturasPorCobrar: any[] = [];
  colorScheme = 'vivid';

  constructor(private router: Router, private dashboard:DashboardService) {}

  //Comparamos la URL completa
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showGraphs = this.router.url === '/dashboard';
    });

    this.cargarFacturas();
  }

  //TODO: PONER LA FECHA BIEN, ESTO ES PARA PRUEBAS
  cargarFacturas() {

    this.dashboard.getInvoiceGrafic('','2025-07-06')
      .subscribe(data => {
        this.facturasPorPagar = this.transformarDatos(data, false);
        this.facturasPorCobrar = this.transformarDatos(data, true); 
      });

      console.log('Facturas obtenidas correctamente');
  }

  transformarDatos(data: any[], isClient: boolean): any[] {
    return data
      .filter(factura => factura.isClient === isClient) 
      .map(factura => ({
        name: `${factura.name} (${factura.paymentDate})`, 
        value: factura.amount
      }));
  }

  formatXAxis(value: string): string {
    return value.length > 10 ? value.substring(0, 10) + '...' : value;
  }

}
