import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { CalcModule } from '@psalguerodev/calc';
import { LibraryComponent } from './pages/library/library.component';
import { WeatherModule } from '@psalguerodev/weather';
import { AuthModule } from '@psalguerodev/auth';
import { BioComponent } from './pages/bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    LibraryComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CalcModule,
    WeatherModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

  constructor() {
  }



}
