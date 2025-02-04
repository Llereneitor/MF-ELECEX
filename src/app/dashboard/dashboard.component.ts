import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showGraphs: boolean = true;

  constructor(private router: Router) {}

  //Comparamos la URL completa
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showGraphs = this.router.url === '/dashboard';
    });
  }

  facturasPorPagar = [
    { name: "Proveedor A", value: 500 },
    { name: "Proveedor B", value: 800 },
    { name: "Proveedor C", value: 300 }
  ];

  facturasPorCobrar = [
    { name: "Cliente X", value: 700 },
    { name: "Cliente Y", value: 1200 },
    { name: "Cliente Z", value: 450 }
  ];

  colorScheme = 'vivid';
}
