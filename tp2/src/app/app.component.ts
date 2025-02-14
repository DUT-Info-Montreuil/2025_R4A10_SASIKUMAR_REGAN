import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {VhSectionComponent} from "./components/vh-section/vh-section.component";
import {ServicesSectionComponent} from "./components/services-section/services-section.component";
import {ImageSliderComponent} from "./components/image-slider/image-slider.component";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
      HeaderComponent,
      FooterComponent,
      VhSectionComponent,
      ServicesSectionComponent,
      ImageSliderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Trafalgar';
}

