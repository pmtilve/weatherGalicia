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
var ContainerComponent = (function () {
    function ContainerComponent() {
    }
    Object.defineProperty(ContainerComponent.prototype, "data", {
        set: function (value) {
            this.city = value !== undefined && value !== null ? value['city']['name'] : "";
            this.country = value !== undefined && value !== null ? value['city']['country'] : "";
            this.day1 = value !== undefined && value !== null ? value['list'][0] : "";
            this.day2 = value !== undefined && value !== null ? value['list'][1] : "";
            this.day3 = value !== undefined && value !== null ? value['list'][2] : "";
            this.day4 = value !== undefined && value !== null ? value['list'][3] : "";
        },
        enumerable: true,
        configurable: true
    });
    return ContainerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ContainerComponent.prototype, "data", null);
ContainerComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        templateUrl: './container.component.html'
    })
], ContainerComponent);
exports.ContainerComponent = ContainerComponent;
//# sourceMappingURL=container.component.js.map