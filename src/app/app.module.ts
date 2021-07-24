import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PricePipe } from './price-pipe.pipe';
import { SheetsService } from './sheets.service';

@NgModule({
  declarations: [
    AppComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    SheetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
