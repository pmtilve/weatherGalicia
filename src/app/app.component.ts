import { DialogWindowDialogComponent } from './dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather/weather.service';
import { MdDialog,MdDialogRef } from "@angular/material";

@Component({
  selector: 'my-app',
  template: `
  <h1>El tiempo para Galicia</h1>
  <app-header [citys]="citys" (cityDataChange)= "onHeaderComponentChange($event)" [currentCity]="currentCity"></app-header>
  <app-container [data] ="data"></app-container>
    `
})
export class AppComponent implements OnInit {

  public readonly citys: Array<string> = ['A Coruña', 'Ferrol', 'Lugo', 'Ourense', 'Pontevedra', 'Santiago de Compostela', 'Vigo'];
  public data: Array<any>;
  public errorMessage: string;
  public currentCity: string;
  dialogRef: MdDialogRef<DialogWindowDialogComponent>;

  constructor(private weatherService: WeatherService,private dialog:MdDialog) { }

  ngOnInit(): void {
    this.currentCity = this.citys[0];
    this.getData(this.citys[0]);

  }

  onHeaderComponentChange(cityName: string) {
    this.getData(cityName);

  }

   getData(cityName: string): void {
    
      this.currentCity = cityName ;
      if(this.currentCity!==undefined && this.currentCity!==""){
        console.log('load '+cityName);
        this.weatherService.getForecastByCityNameifNeeded(cityName)
          .subscribe(
          data => {
            console.log('container get data',data)
            this.data = data;
          },
          error => { 
            this.errorMessage = <any>error;this.openDialog(this.errorMessage);});
          

      }
    }
   openDialog(message:string) {
    this.dialogRef = this.dialog.open(DialogWindowDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.message= message;
     

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }
   
}
