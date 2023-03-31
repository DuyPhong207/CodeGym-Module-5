import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Division} from '../../../model/Division';
import {Level} from '../../../model/Level';
import {Position} from '../../../model/Position';
import {EmployeeService} from '../../../service/employee/employee.service';
import {DivisionService} from '../../../service/employee/division.service';
import {PositionService} from '../../../service/employee/position.service';
import {LevelService} from '../../../service/employee/level.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm: FormGroup;
  divisions: Division[] = [];

  levels: Level[] = [];

  positions: Position[] = [];
  constructor(private employeeService: EmployeeService, private divisionService: DivisionService, private positionService: PositionService,
              private levelService: LevelService, private router: Router) {
    this.divisionService.findAll().subscribe(division => {
      this.divisions = division;
      this.levelService.findAll().subscribe(level => {
        this.levels = level;
        this.positionService.findAll().subscribe(position => {
          this.positions = position;
          this.getForm();
        });
      });
    });
  }

  ngOnInit(): void {
  }

  addEmployee() {
    console.log(this.employeeForm);
    this.employeeService.addEmployee(this.employeeForm.value).subscribe(next => {
      this.router.navigateByUrl('/employee');
    });
  }
  getForm(): void {
    this.employeeForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      division: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
  }
}
