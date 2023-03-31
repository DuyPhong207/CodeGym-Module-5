import { Component, OnInit } from '@angular/core';
import {Contract} from '../../../model/Contract';
import {Customer} from '../../../model/Customer';
import {Employee} from '../../../model/Employee';
import {Facility} from '../../../model/Facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {EmployeeService} from '../../../service/employee/employee.service';
import {FacilityService} from '../../../service/facility/facility.service';
import {ContractService} from '../../../service/contract/contract.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contract: Contract;
  customers: Customer[];
  employees: Employee[];
  facilities: Facility[];
  contractForm: FormGroup;
  constructor(private customerService: CustomerService, private employeeService: EmployeeService,
              private facilityService: FacilityService, private contractService: ContractService, private router: Router) {
    this.customerService.findAll().subscribe(customers => {
      this.customers = customers;
      this.employeeService.findAll().subscribe(employees => {
        this.employees = employees;
        this.facilityService.findAll().subscribe(facilities => {
          this.facilities = facilities;
          this.getFormContract();
        });
      });
    });
  }

  ngOnInit(): void {
  }

  addContract() {
    this.contractService.addContract(this.contractForm.value).subscribe(next => {
      this.router.navigateByUrl('/contract');
    });
  }
  getFormContract() {
    this.contractForm = new FormGroup({
      id: new FormControl(),
      customer: new FormControl('', [Validators.required]),
      employee: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
      dayStart: new FormControl('', [Validators.required]),
      dayEnd: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required]),
      totalPay: new FormControl('', [Validators.required])
    });
  }
}
