import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dayweather',
  templateUrl: './dayweather.component.html'
})

export class DayweatherComponent {

  dt: number;
  main: Array<string>;
  weather: Array<string>;
  icon: string;
  description: string;
  clouds: number;
  speed: number;
  humidity: number;


  @Input()
  set infoWeather(value: Array<string>) {
    console.log(value);
    if(value!==undefined){
      this.clouds = value !== undefined && value !== null ? value['clouds'] : 0;
      this.dt = value !== undefined && value !== null ? value['dt'] * 1000 : 0;
      this.main = value !== undefined && value !== null ? value['temp'] : [];
      this.weather = value !== undefined && value !== null ? value['weather'] : [];

      this.icon = this.weather == [] ? "" : this.weather[0]['icon'];
      this.description = this.weather == [] ? "" :this.weather[0]['description'];
      this.speed = value !== undefined && value !== null ? value['speed']*3.6 : 0;
      this.humidity = value !== undefined && value !== null ? value['humidity'] : 0;
    }

  }

}
