//import { EmployeeService } from './employee.service';
import { Employee } from './../model/employee.model';;
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // private employees : any[];
  private employees: any[];
  private baseURL: string =
    'https://jsonblob.com/api/7975a472-0c72-11eb-89ae-e71b4ac51c01';
  private empEvent = new EventEmitter();

  constructor(private http: HttpClient) {}
 

  getData(): any {
    return this.http.get(this.baseURL).subscribe((data) => {
      this.setEmp(data);
    });
  }

  getEventData() {
    return this.empEvent;
  }

  getEmp() {
    return this.employees;
  }

  setEmp(empArray) {
    this.employees = empArray;
    this.empEvent.emit(this.employees);
  }

  addEmployee(emp: Object) {
    this.employees.push(emp);
    this.setEmp(this.employees);
  }

  updateEmployee = (firstName,lastName,userId,phoneNumber,emailAddress) => {
    this.getEmp().map((item) => {
      item.id === userId
        ? ((item.firstName = firstName),
          (item.lastName = lastName),
          (item.userId = userId),
          (item.phoneNumber = phoneNumber),
          (item.emailAddress = emailAddress))
        : item;
    });
  };


}
