import { Component } from '@angular/core';
import {ImageSlideComponent} from "../image-slide/image-slide.component";

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [ImageSlideComponent],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  slides = [
    {
      name: 'Edward Newgate',
      title: 'Founder Circle',
      image: 'lego_1',
      text: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.'
    },
    {
      name: 'Jane Doe',
      title: 'CEO of MedTech',
      image: 'lego_2',
      text: 'This platform completely changed how we manage patient interactions. It\'s user-friendly and incredibly efficient.'
    },
    {
      name: 'John Smith',
      title: 'Healthcare Consultant',
      image: 'lego_3',
      text: 'An intuitive and effective system that improved our operations significantly. Highly recommended!'
    }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}