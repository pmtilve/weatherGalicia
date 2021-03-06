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
var DayweatherComponent = (function () {
    function DayweatherComponent() {
    }
    Object.defineProperty(DayweatherComponent.prototype, "infoWeather", {
        set: function (value) {
            console.log('daywather', value);
            if (Object.keys(value).length !== 0) {
                this.date = value['dt'] * 1000;
                this.clouds = value['clouds'];
                this.speed = value['speed'] * 3.6;
                this.humidity = value['humidity'];
                var main = value['temp'];
                var weather = value['weather'];
                this.icon = weather[0]['icon'];
                this.description = weather[0]['description'];
                this.mintemp = main['min'];
                this.maxtemp = main['max'];
                this.daytemp = main['day'];
            }
        },
        enumerable: true,
        configurable: true
    });
    return DayweatherComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DayweatherComponent.prototype, "infoWeather", null);
DayweatherComponent = __decorate([
    core_1.Component({
        selector: 'app-dayweather',
        templateUrl: './dayweather.component.html'
    })
], DayweatherComponent);
exports.DayweatherComponent = DayweatherComponent;
//# sourceMappingURL=dayweather.component.js.map