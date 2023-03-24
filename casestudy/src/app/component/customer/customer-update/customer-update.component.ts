import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../../../model/Customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/CustomerType';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  editCustomerForm: FormGroup;
  types: CustomerType[] = [{id: 1, name: 'Member'}, {id: 2, name: 'Gold'}, {id: 3, name: 'Platinum'}];
  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.customer = this.customerService.findById(parseInt(id));
        console.log(this.customer);
      }
    }, error => {
    }, () => {
    });

    this.editCustomerForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      typeId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }

  editCustomer() {

  }
}
