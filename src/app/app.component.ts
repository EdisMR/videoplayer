import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  falseValue(e:Event):boolean{
    e.preventDefault();
    return false;
  }
}
