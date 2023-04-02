import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/CustomerType';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../../service/customer/customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Output()
  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService, private router: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      customerType: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });

    this.customerTypeService.findAll().subscribe(next => {
      console.log(next);
      this.customerTypes = next;
    });
  }

  ngOnInit(): void {
  }

  addCustomer() {
    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.customerService.addCustomer(this.customerForm.value).subscribe(next => {
        this.router.navigateByUrl('/customer');
      }, error => {
        console.log(error);
      });
    }
  }
}
