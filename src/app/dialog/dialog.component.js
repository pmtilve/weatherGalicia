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
var material_1 = require("@angular/material");
var DialogWindowComponent = (function () {
    function DialogWindowComponent(dialog) {
        this.dialog = dialog;
    }
    DialogWindowComponent.prototype.openDialog = function (message) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogWindowDialogComponent, {
            data: message,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    return DialogWindowComponent;
}());
DialogWindowComponent = __decorate([
    core_1.Component({
        selector: 'dialog-window',
        template: '<dialog-window-dialog ></dialog-window-dialog>',
    }),
    __metadata("design:paramtypes", [material_1.MdDialog])
], DialogWindowComponent);
exports.DialogWindowComponent = DialogWindowComponent;
var DialogWindowDialogComponent = (function () {
    function DialogWindowDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DialogWindowDialogComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DialogWindowDialogComponent.prototype, "message", void 0);
DialogWindowDialogComponent = __decorate([
    core_1.Component({
        selector: 'dialog-window-dialog',
        templateUrl: './dialog-window-dialog.html',
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], DialogWindowDialogComponent);
exports.DialogWindowDialogComponent = DialogWindowDialogComponent;
//# sourceMappingURL=dialog.component.js.map