import { arrayify } from 'tslint/lib/utils';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  private readonly baseUrl = 'http://api.openweathermap.org/data/2.5/';
  readonly ApiKey = '01d36ee41cd1a44413e07331c226565f';
  constructor(private http: Http) { }

  getForecastByCityNameifNeeded(cityName: string): Observable<any> {
    return this.http.get(this.baseUrl + 'forecast/daily?q=' + cityName + '&appid=' + this.ApiKey + '&units=metric&lang=es')
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }

  private extractData(res: any) {

    let body = res.json();
    let result: Array<string> = body || [];
    return result;
  }

  private handleError(error: any) {
    let errMsg = error || 'server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
