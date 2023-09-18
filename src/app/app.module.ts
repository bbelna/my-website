// Angular/Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

// Application
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { NgParticlesModule } from 'ng-particles';

const MATERIAL_IMPORTS = [
  MatCardModule,
  MatToolbarModule
];

const MISC_IMPORTS = [
  NgParticlesModule
];

const COMPONENTS = [
  AppComponent,
  LandingComponent,
  ContainerComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MATERIAL_IMPORTS,
    ...MISC_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
