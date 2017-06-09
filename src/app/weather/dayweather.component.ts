import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dayweather',
  templateUrl: './dayweather.component.html'
})

export class DayweatherComponent {

  date: number;
  icon: string;
  description: string;
  daytemp:number;
  mintemp:number;
  maxtemp:number;
  clouds: number;
  speed: number;
  humidity: number;


  @Input()
  set infoWeather(value: Object) {
    console.log('daywather',value);

    if(Object.keys(value).length !== 0){
      this.date   =  value['dt'] * 1000;
      this.clouds =  value['clouds'];
      this.speed  =  value['speed']*3.6;
      this.humidity = value['humidity'];

      let main = value['temp'];
      let weather = value['weather'];

      this.icon = weather[0]['icon'];
      this.description = weather[0]['description'];
      this.mintemp = main['min'];
      this.maxtemp = main['max'];
      this.daytemp = main['day'];
      }
    }

  }

}
