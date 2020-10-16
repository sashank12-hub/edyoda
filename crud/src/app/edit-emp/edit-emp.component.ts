import { EmployeeService } from './../Services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
editForm :   FormGroup;
  constructor( ) { }

  ngOnInit(): void {
  }

  updateEmployee(firstName,lastName,userId,phoneNumber,emailAddress){}

}
