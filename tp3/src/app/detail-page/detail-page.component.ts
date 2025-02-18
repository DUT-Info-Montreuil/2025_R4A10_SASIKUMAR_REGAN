import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip, TripsService } from '../trips.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  id!: string;
  trip: Trip | null = null;


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly tripsService: TripsService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = idParam;
      this.trip = this.tripsService.findOne(this.id);
    }

    if (!this.trip) {
      this.router.navigate(['/404']);
    }
  }

  onDeleteTrip(id: string) {
    this.tripsService.deleteTrip(id);
  }
}
