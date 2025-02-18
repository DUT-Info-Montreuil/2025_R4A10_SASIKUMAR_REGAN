import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripsService, Trip } from '../trips.service';

@Component({
  selector: 'app-generate-page',
  standalone: true,
  imports: [],
  templateUrl: './generate-page.component.html',
  styleUrls: ['./generate-page.component.css']
})
export class GeneratePageComponent {
  generatedTrip: Trip | null = null;

  constructor(
    private readonly tripsService: TripsService,
    private readonly router: Router
  ) {}

  generateTrip() {
    this.generatedTrip = this.tripsService.generateRandomTrip();
  }

  validateTrip() {
    if (this.generatedTrip) {
      this.tripsService.addTrip(this.generatedTrip);
      this.router.navigate([`/`]);
    }
  }
}
