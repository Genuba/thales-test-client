import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.apiUrl + "/employee"

  constructor(private http: HttpClient) { }

  getEmployee(employeeId: number): Observable<Employee>{
    const url = this.baseUrl + "/" + employeeId
    return this.http.get<Employee>(url)
  }

  getEmployees(): Observable<Employee[]>{
    const url = this.baseUrl
    return this.http.get<Employee[]>(url)
  }
}
