import { EmployeeService } from './../Services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  newEmp: Object;
  employees: any[];

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {    
  }

  createEmployee(firstName,lastName,userId,phoneNumber,emailAddress){
    this.newEmp={
      firstName: firstName.value,
      userId: userId.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      emailAddress: emailAddress.value,
     
    }

    this.empService.addEmployee(this.newEmp);
  }

  
 } 

