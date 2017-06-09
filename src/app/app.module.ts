import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogWindowComponent, DialogWindowDialogComponent } from './dialog/dialog.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdProgressSpinnerModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherService } from './weather/weather.service';
import { ContainerModule } from './container/container.module';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ContainerModule,NoopAnimationsModule, MdProgressSpinnerModule, MaterialModule  ],
  declarations: [ AppComponent, HeaderComponent,DialogWindowComponent,DialogWindowDialogComponent],
  bootstrap:    [ AppComponent ],
  entryComponents: [
    DialogWindowDialogComponent
  ],
  providers:    [WeatherService]
})
export class AppModule { }
