import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html'
})

export class ContainerComponent {
  city: string;
  country: string;
  day1: Object;
  day2: Object;
  day3: Object;
  day4: Object;
  
  @Input()
  set data(value: Object) {

    this.city = value !== undefined && value !== null ? value['city']['name'] : "";
    this.country = value !== undefined && value !== null ? value['city']['country'] : "";
    this.day1 = value !== undefined && value !== null ? value['list'][0] : {};
    this.day2 = value !== undefined && value !== null ? value['list'][1] : {};
    this.day3 = value !== undefined && value !== null ? value['list'][2] : {};
    this.day4 = value !== undefined && value !== null ? value['list'][3] : {};

  }




}
