import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/CustomerType';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Output()
  evenEmmit = new EventEmitter();
  types: CustomerType[] = [{id: 1, name: 'Member'}, {id: 2, name: 'Gold'}, {id: 3, name: 'Platinum'}];
  customerForm: FormGroup;

  constructor(private customerService: CustomerService, private router: Router) {
    this.customerForm = new FormGroup({
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

  addCustomer() {
    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.customerService.addCustomer(this.customerForm.value);
      this.router.navigateByUrl('');
    }
  }
}
