import { AppModule } from './../app.module';
import { EmployeeService } from './../Services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css'],
})
export class ListEmpComponent implements OnInit {
  employees;
  editMode = new Array();
  arr;
  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.empService.getEmp();
    // console.log(this.employees);

    if (!this.employees) {
      this.empService.getData();
      // console.log(this.employees);
    }
    this.empService.getEventData().subscribe((data) => {
      this.employees = data;
      // console.log(this.employees);
    });
  }

  editEmployee(employee, i) {
    this.editMode[i] = true;
  }

  saveEmployee(employee, i) {
    this.empService.updateEmployee(
      employee.lastName,
      employee.userId,
      employee.firstName,
      employee.emailAddress,
      employee.phoneNumber
      
    );

    this.editMode[i] = false;
  }

  onDelete(employee) {
    let index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }
}
