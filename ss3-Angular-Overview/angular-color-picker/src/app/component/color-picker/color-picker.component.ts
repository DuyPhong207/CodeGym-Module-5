import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color = {id: 1,value: 'red'};

  constructor() { }

  ngOnInit(): void {
  }

  chooseColor(value:string) {
    this.color.value = value;
  }

}
