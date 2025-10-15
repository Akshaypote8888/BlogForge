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

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  addCategory(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categories`, user);
  }

  updateCategory(id: number, category: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/categories/${id}`, category);
    
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/categories/${id}`);
  }
  
}
