import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  httpClient: any;
  constructor(private http: HttpClient) {}
  message(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(environment.apiUrl + '/api/message', data, {
      headers: headers,
    });
  }

  list_of_message() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.get(environment.apiUrl + '/api/all-message', {
      headers: headers,
    });
  }

  delete_a_message(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.delete(environment.apiUrl + '/api/delete-message/' + id, {
      headers: headers,
    });
  }

  myProfile(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //  Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(environment.apiUrl + '/api/myProfile', data, {
      headers: headers,
    });
  }

  login(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(environment.apiUrl + '/api/login', data, {
      headers: headers,
    });
  }

  logout(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(environment.apiUrl + '/api/logout', data, {
      headers: headers,
    });
  }
}
