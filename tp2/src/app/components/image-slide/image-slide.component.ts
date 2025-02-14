import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-slide',
  standalone: true,
  imports: [],
  templateUrl: './image-slide.component.html',
  styleUrl: './image-slide.component.scss'
})
export class ImageSlideComponent {
    @Input() slide!: { name: string, title: string, image: string, text: string };
}