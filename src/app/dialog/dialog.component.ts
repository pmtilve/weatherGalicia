import { Message } from '_debugger';
import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';


@Component({
    selector: 'dialog-window',
    template: '<dialog-window-dialog ></dialog-window-dialog>',
})
export class DialogWindowComponent {
    selectedOption: string;

    constructor(public dialog: MdDialog) { }

    openDialog(message: string) {

        let dialogRef = this.dialog.open(DialogWindowDialogComponent, {
            data: message,
        });
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }
}


@Component({
    selector: 'dialog-window-dialog',
    templateUrl: './dialog-window-dialog.html',
})

export class DialogWindowDialogComponent {
    constructor(public dialogRef: MdDialogRef<DialogWindowDialogComponent>) { }
    @Input() message: string;
}
