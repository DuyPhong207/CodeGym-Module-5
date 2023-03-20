import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor() {
    this.formLogin = new FormGroup ({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.minLength(6), Validators.required])
    })
  }

  ngOnInit(): void {
  }

  login():void {
    console.log(this.formLogin.value);
  }
}
