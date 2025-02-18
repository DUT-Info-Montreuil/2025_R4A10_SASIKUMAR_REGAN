import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip, TripsService } from '../trips.service';
import { TripsListComponent } from '../trips-list/trips-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TripsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  trips: Trip[] = [];
  showDialog = false;
  selectedID: string | null = null;

  constructor(
    private readonly tripsService: TripsService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.trips = this.tripsService.findAll();
  }

  onPageButtonClick(id: string) {
    this.selectedID = id;
    this.showDialog = true;
  }

  onNavigation() {
    if (this.selectedID) {
      this.router.navigate([`/detail/${this.selectedID}`]);
      this.showDialog = false;
    }
  }

  onDialogClose() {
    this.showDialog = false;
    this.selectedID = null;
  }

}
