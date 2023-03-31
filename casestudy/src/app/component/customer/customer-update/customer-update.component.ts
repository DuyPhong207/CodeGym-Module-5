import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../model/Customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/CustomerType';
import {CustomerTypeService} from '../../../service/customer/customer-type.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  customerEdit: Customer;
  editCustomerForm: FormGroup;
  customerTypes: CustomerType[] = [];
  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.customerService.findById(parseInt(id)).subscribe(next => {
          console.log(next);
          this.customer = next;

          this.customerTypeService.findAll().subscribe(success => {
            console.log(success);
            this.customerTypes = success;
            this.getForm();
          }, error => {
            console.log(error);
          });
        });
      }
    }, error => {
      console.log(error);
    }, () => {
    });
  }
  ngOnInit(): void {
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  editCustomer() {
    this.customerEdit = this.editCustomerForm.value;
    console.log(this.customerEdit);
    this.customerService.editCustomer(this.customerEdit).subscribe(next => {
      this.router.navigateByUrl('/customer');
    }, error => {
      console.log(error);
    });
  }

  deleteCustomerById() {
    this.customerService.deleteCustomer(this.editCustomerForm.controls.id.value).subscribe();
    this.router.navigateByUrl('/customer');
  }
  getForm() {
    this.editCustomerForm = new FormGroup({
      id: new FormControl(this.customer.id),
      customerType: new FormControl(this.customer.customerType),
      name: new FormControl(this.customer.name, [Validators.required, Validators.minLength(3)]),
      dateOfBirth: new FormControl(this.customer.dateOfBirth, [Validators.required]),
      idCard: new FormControl(this.customer.idCard, [Validators.required]),
      phone: new FormControl(this.customer.phone, [Validators.required]),
      email: new FormControl(this.customer.email, [Validators.required]),
      address: new FormControl(this.customer.address, [Validators.required]),
    });
  }
}
