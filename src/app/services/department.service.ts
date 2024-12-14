import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = 'http://localhost:8080/api/departments'; // Backend API for departments

  constructor(private http: HttpClient) {}

  // Get a list of all departments
  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
