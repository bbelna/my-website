import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [
  AppComponent,
  LandingComponent,
  HeaderComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
