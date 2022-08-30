import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Keyboard, Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation]);

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent {

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { type: 'bullets' },
    keyboard: { enabled: true },
    rewind: true
  };

}
