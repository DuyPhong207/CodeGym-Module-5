import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenEmmit = new EventEmitter();
  title = 'Exercise';

  getRate(value: string) {
    this.evenEmmit.emit(value);
  }
}
