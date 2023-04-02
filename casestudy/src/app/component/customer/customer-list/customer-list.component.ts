import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/Customer';
import {CustomerService} from '../../../service/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {
    this.customerService.findAll().subscribe(next => {
      console.log(next);
      this.customers = next;
    });
  }

  ngOnInit(): void {
  }

  searchByName(value: string) {
    this.customerService.findByName(value).subscribe(next => {
      this.customers = next;
    });
  }
}
