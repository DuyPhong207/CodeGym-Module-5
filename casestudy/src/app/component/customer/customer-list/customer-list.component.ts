import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/Customer';
import {CustomerService} from '../../../service/customer/customer.service';
import {CustomerTypeService} from '../../../service/customer/customer-type.service';
import {CustomerType} from '../../../model/CustomerType';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  years: string[] = [];
  customerTypes: CustomerType[] = [];
  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {
    this.customerService.findAll().subscribe(next => {
      console.log(next);
      this.customers = next;
      this.customerTypeService.findAll().subscribe(next1 => {
        this.customerTypes = next1;
      });
    });
    this.getYear();
  }

  ngOnInit(): void {
  }
  getYear() {
    for (let i = 1950; i <= 2023; i++) {
      this.years.push(i.toString());
    }
  }
  searchByYear(year: string) {
    console.log(year);
    this.customerService.findByYearOfBirth(year).subscribe(next => {
      console.log(next);
      this.customers = next;
    });
  }

  searchByTypeName(typeName: string) {
    this.customerService.findByTypeName(typeName).subscribe(next => {
      this.customers = next;
    });
  }

  searchByName(name: string) {
    this.customerService.findByName(name).subscribe(next => {
      this.customers = next;
    });
  }
}
