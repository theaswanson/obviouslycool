import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MobileNavigationComponent } from './navigation/mobile-navigation/mobile-navigation.component';
import { DesktopNavigationComponent } from './navigation/desktop-navigation/desktop-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileNavigationComponent,
    DesktopNavigationComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
