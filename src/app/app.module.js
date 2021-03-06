"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/platform-browser/animations");
var dialog_component_1 = require("./dialog/dialog.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var weather_service_1 = require("./weather/weather.service");
var container_module_1 = require("./container/container.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, container_module_1.ContainerModule, animations_1.NoopAnimationsModule, material_1.MdProgressSpinnerModule, material_1.MaterialModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, dialog_component_1.DialogWindowComponent, dialog_component_1.DialogWindowDialogComponent],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [
            dialog_component_1.DialogWindowDialogComponent
        ],
        providers: [weather_service_1.WeatherService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map