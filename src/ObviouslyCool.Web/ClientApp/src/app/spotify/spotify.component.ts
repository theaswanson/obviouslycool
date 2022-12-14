import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpotifyService, TopArtist } from './spotify.service';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpotifyComponent implements OnInit {

  spotifyService: SpotifyService;

  topArtists: TopArtist[];

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 50,
    navigation: true,
    pagination: { type: 'bullets' },
    rewind: true,
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 4
      },
      1300: {
        slidesPerView: 5
      },
      1600: {
        slidesPerView: 3
      },
      1960: {
        slidesPerView: 4
      },
      2307: {
        slidesPerView: 3
      },
    }
  };

  constructor(spotifyService: SpotifyService) {
    this.spotifyService = spotifyService;
  }

  ngOnInit(): void {
    this.spotifyService.getTopArtists().subscribe({
      next: (topArtists) => { this.topArtists = topArtists; }
    })
  }

}
