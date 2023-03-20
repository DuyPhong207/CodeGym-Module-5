import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {group} from "@angular/animations";
import {retry} from "rxjs/operators";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  createForm: FormGroup;

  constructor() {
    this.createForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern("^\\+84\\d{9,10}$")])
    })
  }

  checkConfirmPass(control: AbstractControl): any {
      let confirmPassword = control.value;
      let password = this.createForm.controls.confirmPassword.value;
      return confirmPassword === password ? null : {notSame: true}
  }

  ngOnInit(): void {
  }

  save() {
    if (this.createForm.valid) {
      console.log(this.createForm.value);
    }
  }
}
