import { Component } from '@angular/core';
import {ServiceCardComponent} from "../service-card/service-card.component";

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [
    ServiceCardComponent
  ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})

export class ServicesSectionComponent {
  services = [
    { title: 'Search doctor', description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals', icon: 'search' },
    { title: 'Online pharmacy', description: 'Buy your medicines with our mobile application with a simple delivery system', icon: 'pharmacy' },
    { title: 'Consultation', description: 'Free consultation with our trusted doctors and get the best recommendations', icon: 'consultation' },
    { title: 'Details info', description: 'Free consultation with our trusted doctors and get the best recommendations', icon: 'info' },
    { title: 'Emergency care', description: 'You can get 24/7 urgent care for yourself or your children and your lovely family', icon: 'emergency' },
    { title: 'Tracking', description: 'Track and save your medical history and health data', icon: 'tracking' }
  ];
}