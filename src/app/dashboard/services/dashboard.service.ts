import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HOST, DNS_INVOICES, GRAFIC_INVOICES } from '../../config/routes/routes.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getInvoiceGrafic(startDate:any, endDate:any): Observable<any> {

    const url = `${HOST}${DNS_INVOICES}${GRAFIC_INVOICES}`;
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);

      return this.http.get<any>(url, { params });
  }

}
