import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  notFound = false;
  employee?: Employee;
  employees?: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  getEmployee(employeeId: any){
    this.employee = undefined;
    this.employees = undefined;
    if(employeeId) return this.getEmployeeId(employeeId);
    return this.getEmployees();
  }

  getEmployeeId(employeeId: any){
    this.notFound = false;
    this.employeeService.getEmployee(employeeId).subscribe((employee: Employee) =>{
      this.employee = employee;
    },(err: any)=>{
      this.notFound = true;
    });
  }

  getEmployees(){
    this.notFound = false;
    this.employeeService.getEmployees().subscribe((employees: Employee[]) =>{
      this.employees = employees;
      console.log(employees);
    },(err: any)=>{
      this.notFound = true;
    });
  }
}
