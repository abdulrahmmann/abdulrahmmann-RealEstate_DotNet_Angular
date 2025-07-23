import {Component, Input} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-auth-carousel',
  imports: [CarouselModule, NgClass],
  templateUrl: './auth-carousel.html',
})
export class AuthCarousel {
  @Input() carouselItems: {
    title: string;
    description: string;
    image: string;
  }[] = [];
}
