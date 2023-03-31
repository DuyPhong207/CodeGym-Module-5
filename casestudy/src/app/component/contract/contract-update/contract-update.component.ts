import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../../service/contract/contract.service';
import {CustomerService} from '../../../service/customer/customer.service';
import {EmployeeService} from '../../../service/employee/employee.service';
import {FacilityService} from '../../../service/facility/facility.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contract} from '../../../model/Contract';
import {Customer} from '../../../model/Customer';
import {Employee} from '../../../model/Employee';
import {Facility} from '../../../model/Facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {
  contract: Contract;
  contractEdit: Contract;
  customers: Customer[];
  employees: Employee[];
  facilities: Facility[];
  editContractForm: FormGroup;

  constructor(private contractService: ContractService, private customerService: CustomerService, private employeeService: EmployeeService,
              private facilityService: FacilityService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.contractService.findById(parseInt(id)).subscribe(contract => {
          console.log(contract);
          this.contract = contract;

          this.customerService.findAll().subscribe(next1 => {
            console.log(next1);
            this.customers = next1;

            this.employeeService.findAll().subscribe(next2 => {
              console.log(next2);
              this.employees = next2;

              this.facilityService.findAll().subscribe(next3 => {
                console.log(next3);
                this.facilities = next3;
                this.getFormEditContract();
              });
            });
          });
        }, error => {
          console.log(error);
        }, () => {
        });
      }
    });
  }

  getFormEditContract() {
    this.editContractForm = new FormGroup({
      id: new FormControl(),
      customer: new FormControl(this.contract.customer, [Validators.required]),
      employee: new FormControl(this.contract.employee, [Validators.required]),
      facility: new FormControl(this.contract.facility, [Validators.required]),
      dayStart: new FormControl(this.contract.dayStart, [Validators.required]),
      dayEnd: new FormControl(this.contract.dayEnd, [Validators.required]),
      deposit: new FormControl(this.contract.deposit, [Validators.required]),
      totalPay: new FormControl(this.contract.totalPay, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  editContract() {

  }

  deleteContractById() {

  }
}
