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
import { TwitchComponent } from './twitch/twitch.component';
import { SwiperModule } from 'swiper/angular';
import { GalleryComponent } from './gallery/gallery.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { HttpClientModule } from '@angular/common/http';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileNavigationComponent,
    DesktopNavigationComponent,
    TwitchComponent,
    GalleryComponent,
    SpotifyComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
