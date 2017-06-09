import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';

import { ContainerComponent } from './container.component';
import { DayweatherComponent } from '../weather/dayweather.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [ContainerComponent, DayweatherComponent],
  exports: [ContainerComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "es-ES" }]
})
export class ContainerModule { }
