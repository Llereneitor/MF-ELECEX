import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DNS_LOGIN, HOST, IS_VALID_USER } from '../../config/routes/routes.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  checkUser(credentials: any): Observable<any> {

    const params = new HttpParams()
      .set('user', credentials.username)
      .set('password', credentials.password);

    return this.http.get<boolean>(`${HOST}${DNS_LOGIN}${IS_VALID_USER}`, {params});
  }
}
