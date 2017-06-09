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
var dialog_component_1 = require("./dialog/dialog.component");
var core_1 = require("@angular/core");
var weather_service_1 = require("./weather/weather.service");
var material_1 = require("@angular/material");
var AppComponent = (function () {
    function AppComponent(weatherService, dialog) {
        this.weatherService = weatherService;
        this.dialog = dialog;
        this.citys = ['A Coruña', 'Ferrol', 'Lugo', 'Ourense', 'Pontevedra', 'Santiago de Compostela', 'Vigo'];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.currentCity = this.citys[0];
        this.getData(this.citys[0]);
    };
    AppComponent.prototype.onHeaderComponentChange = function (cityName) {
        this.getData(cityName);
    };
    AppComponent.prototype.getData = function (cityName) {
        var _this = this;
        this.currentCity = cityName;
        if (this.currentCity !== undefined && this.currentCity !== "") {
            console.log('load ' + cityName);
            this.weatherService.getForecastByCityNameifNeeded(cityName)
                .subscribe(function (data) {
                console.log('container get data', data);
                _this.data = data;
            }, function (error) {
                _this.errorMessage = error;
                _this.openDialog(_this.errorMessage);
            });
        }
    };
    AppComponent.prototype.openDialog = function (message) {
        var _this = this;
        this.dialogRef = this.dialog.open(dialog_component_1.DialogWindowDialogComponent, {
            disableClose: false
        });
        this.dialogRef.componentInstance.message = message;
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log('result: ' + result);
            _this.dialogRef = null;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>El tiempo para Galicia</h1>\n  <app-header [citys]=\"citys\" (cityDataChange)= \"onHeaderComponentChange($event)\" [currentCity]=\"currentCity\"></app-header>\n  <app-container [data] =\"data\"></app-container>\n    "
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService, material_1.MdDialog])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map