import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Division} from '../../../model/Division';
import {Level} from '../../../model/Level';
import {Position} from '../../../model/Position';
import {EmployeeService} from '../../../service/employee/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  // private regexPhone = '^\\0\\d{9,10}$';
  employeeForm: FormGroup;
  divisions: Division[] = [
    {id: 1, name: 'An ninh'},
    {id: 2, name: 'Kĩ thuật'},
    {id: 3, name: 'Marketing'}
  ];

  levels: Level[] = [
    {id: 1, name: 'Cao Đẳng'},
    {id: 2, name: 'Đại Học'},
    {id: 3, name: 'Thạc Sĩ'}
  ];

  positions: Position[] = [
    {id: 1, name: 'Nhân Viên'},
    {id: 2, name: 'Giám sát'},
    {id: 3, name: 'Quản lý'},
    {id: 4, name: 'Phó giám đốc'},
    {id: 5, name: 'Giám đốc'}
  ];
  constructor(private employeeService: EmployeeService) {
    this.employeeForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      positionId: new FormControl('', [Validators.required]),
      levelId: new FormControl('', [Validators.required]),
      divisionId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  getEmployee() {
    console.log(this.employeeForm.value);
  }

  addEmployee() {
    console.log(this.employeeForm);
    // if (this.employeeForm.valid) {
    this.employeeService.addEmployee(this.employeeForm.value);
    // }
  }
}
