import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

@Injectable({ providedIn: 'root' })
export class ApiService {

  private baseUrl = 'https://68edde34df2025af780158f4.mockapi.io/api/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categories`, user);
  }
  
}
