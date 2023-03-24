import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Employee} from '../../../model/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {
    this.employees = employeeService.findAll();
  }

  ngOnInit(): void {
  }

}
