import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Input() citys: Array<string>;
  @Output() cityDataChange = new EventEmitter();
  @Input() currentCity: string;

  getWeatherCity(cityName: string) {
    console.log('click '+cityName);
    this.currentCity= cityName;
    this.cityDataChange.emit(cityName); 
  }

}

