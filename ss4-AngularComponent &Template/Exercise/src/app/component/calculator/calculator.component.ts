import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  addition(value: string, value2: string) {
    this.result = parseInt(value) + parseInt(value2);
  }

  subtraction(value: string, value2: string) {
    this.result = parseInt(value) - parseInt(value2);
  }

  multiplication(value: string, value2: string) {
    this.result = parseInt(value) * parseInt(value2);
  }

  division(value: string, value2: string) {
    this.result = parseInt(value) / parseInt(value2);
  }
}
