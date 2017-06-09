import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  private readonly baseUrl = 'http://api.openweathermap.org/data/2.5/';
  readonly ApiKey = '01d36ee41cd1a44413e07331c226565f';
  private cityName: string;
  private timeWait: number;

  constructor(private http: Http) { }

  getForecastByCityNameifNeeded(cityName: string): Observable<any[]> {
    this.cityName = cityName;
    /*Si pasan de los 10 minutos desde la ultima llamada llama al servicio*/
    if (this.shouldFetch()) {
      return this.http.get(this.baseUrl + 'forecast/daily?q=' + cityName + '&appid=' + this.ApiKey + '&units=metric&lang=es')
        .map(response => this.extractData(response))
        .catch(this.handleError);
    } else {
      console.log('not shouldFech forescat');;
      let ls = localStorage.getItem(cityName);
      if (ls != null) {
        return Observable.of(JSON.parse(ls));
      } else {
        return this.handleError('FREE VERSION, no puede consultar la siguiente predicción hasta dentro de ' + this.timeWait + ' minutos');
      }
    }
  }


  private extractData(res: any) {


    let body = res.json();
    let result: Array<string> = body || [];
    console.log("extradatas " + result);
    this.saveInfoInLocalStorage(result);
    return result;
  }

  private handleError(error: any) {
    let errMsg = error || 'server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  /* guardar localstorage y los datos de la ciudad consultada*/
  private saveInfoInLocalStorage(data: Array<any>) {
    localStorage.setItem('updated', JSON.stringify(new Date()));
    localStorage.setItem(this.cityName, JSON.stringify(data));

  };

  /* function devuelve true si hace mas de 10 minutos que se hizo la ultima llamada */
  private shouldFetch(): Boolean {
    let updatedLS = JSON.parse(localStorage.getItem('updated'));
    let diffDate: number = 0;

    if (updatedLS !== null && updatedLS !== undefined) {
      diffDate = +new Date() - +new Date(updatedLS);
      this.timeWait = 10 - new Date(diffDate).getMinutes();
    };

    if (updatedLS === null || updatedLS === undefined ||
      (diffDate > (10 * 60 * 1000))) {
      return true;
    } else {
      return false;
    }
  }

}
