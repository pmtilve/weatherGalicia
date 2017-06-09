"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.baseUrl = 'http://api.openweathermap.org/data/2.5/';
        this.ApiKey = '01d36ee41cd1a44413e07331c226565f';
    }
    WeatherService.prototype.getForecastByCityNameifNeeded = function (cityName) {
        var _this = this;
        this.cityName = cityName;
        /*Si pasan de los 10 minutos desde la ultima llamada llama al servicio*/
        if (this.shouldFetch()) {
            return this.http.get(this.baseUrl + 'forecast/daily?q=' + cityName + '&appid=' + this.ApiKey + '&units=metric&lang=es')
                .map(function (response) { return _this.extractData(response); })
                .catch(this.handleError);
        }
        else {
            console.log('not shouldFech forescat');
            ;
            var ls = localStorage.getItem(cityName);
            if (ls != null) {
                return Observable_1.Observable.of(JSON.parse(ls));
            }
            else {
                return this.handleError('FREE VERSION, no puede consultar la siguiente predicción hasta dentro de ' + this.timeWait + ' minutos');
            }
        }
    };
    WeatherService.prototype.extractData = function (res) {
        var body = res.json();
        var result = body || [];
        console.log("extradatas " + result);
        this.saveInfoInLocalStorage(result);
        return result;
    };
    WeatherService.prototype.handleError = function (error) {
        var errMsg = error || 'server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    /* guardar localstorage y los datos de la ciudad consultada*/
    WeatherService.prototype.saveInfoInLocalStorage = function (data) {
        localStorage.setItem('updated', JSON.stringify(new Date()));
        localStorage.setItem(this.cityName, JSON.stringify(data));
    };
    ;
    /* function devuelve true si hace mas de 10 minutos que se hizo la ultima llamada */
    WeatherService.prototype.shouldFetch = function () {
        var updatedLS = JSON.parse(localStorage.getItem('updated'));
        var diffDate = 0;
        if (updatedLS !== null && updatedLS !== undefined) {
            diffDate = +new Date() - +new Date(updatedLS);
            this.timeWait = 10 - new Date(diffDate).getMinutes();
        }
        ;
        if (updatedLS === null || updatedLS === undefined ||
            (diffDate > (10 * 60 * 1000))) {
            return true;
        }
        else {
            return false;
        }
    };
    return WeatherService;
}());
WeatherService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map