"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var core_2 = require("@angular/core");
var container_component_1 = require("./container.component");
var dayweather_component_1 = require("../weather/dayweather.component");
var ContainerModule = (function () {
    function ContainerModule() {
    }
    return ContainerModule;
}());
ContainerModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [container_component_1.ContainerComponent, dayweather_component_1.DayweatherComponent],
        exports: [container_component_1.ContainerComponent],
        providers: [
            { provide: core_2.LOCALE_ID, useValue: "es-ES" }
        ]
    })
], ContainerModule);
exports.ContainerModule = ContainerModule;
//# sourceMappingURL=container.module.js.map