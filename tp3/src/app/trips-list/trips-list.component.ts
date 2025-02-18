import { Component, Input } from '@angular/core';
import {Trip, TripsService} from '../trips.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-trips-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trips-list.component.html',
  styleUrl: './trips-list.component.css',
})
export class TripsListComponent {
  @Input() trips: Trip[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly tripsService: TripsService,
    private readonly router: Router
  ) {}


  onDeleteTrip(id: string) {
    this.tripsService.deleteTrip(id);
    this.router.navigate(['/']);
  }

}
