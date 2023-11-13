import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {CustomSlideModel} from "../../model/custom-slide.model";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  public slidesStore: CustomSlideModel[];
  constructor() {
    this.slidesStore = [
      {id: 1, alt: 'Slide Image', src: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg', title: 'Slide 1'},
      {id: 2, alt: 'Slide Image', src: 'https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?resize=1200:*', title: 'Slide 2'},
      {id: 3, alt: 'Slide Image', src: 'https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png', title: 'Slide 3'},
      {id: 4, alt: 'Slide Image', src: 'https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg', title: 'Slide 4'},
      {id: 5, alt: 'Slide Image', src: 'https://th-thumbnailer.cdn-si-edu.com/twkHVLcLnOqosdzoalRmOAF-X1Y=/fit-in/1600x0/filters:focal(594x274:595x275)/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2F95%2Fdb%2F95db799b-fddf-4fde-91f3-77024442b92d%2Fegypt_kitty_social.jpg', title: 'Slide 5'},
    ];
  }


 public ngOnInit(): void {
 }


  changeCustomDots() {
    console.log("change custom dots styles here..");
  }
}
