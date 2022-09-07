import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent {

  gameImages: string[] = [
    '/assets/img/ttyd.jpg',
    '/assets/img/melee.png',
    '/assets/img/tf2.jpg',
    '/assets/img/spiderman.jpg',
    '/assets/img/rocket-league.jpg',
    '/assets/img/hl2.jpg',
    '/assets/img/portal2.jpg'
  ];

  config: SwiperOptions = {
    slidesPerView: 1,
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

}
