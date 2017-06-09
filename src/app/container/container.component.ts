import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html'
})

export class ContainerComponent {
  city: string;
  country: string;
  day1: Array<string>;
  day2: Array<string>;
  day3: Array<string>;
  day4: Array<string>;
  
  @Input()
  set data(value: Array<string>) {

    this.city = value !== undefined && value !== null ? value['city']['name'] : "";
    this.country = value !== undefined && value !== null ? value['city']['country'] : "";
    this.day1 = value !== undefined && value !== null ? value['list'][0] : "";
    this.day2 = value !== undefined && value !== null ? value['list'][1] : "";
    this.day3 = value !== undefined && value !== null ? value['list'][2] : "";
    this.day4 = value !== undefined && value !== null ? value['list'][3] : "";

  }




}
