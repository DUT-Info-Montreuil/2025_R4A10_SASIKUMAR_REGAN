import { Injectable } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../data';

export type Trip = {
  id: string;
  destination: string;
  description: string;
  date: string;
  price: number;
};

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private trips: Trip[] = [];

  constructor() {
    this.loadTrips();
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 10); // Génère un ID unique sous forme de string
  }

  private saveTrips(): void {
    localStorage.setItem('trips', JSON.stringify(this.trips));
  }

  private loadTrips(): void {
    const storedTrips = localStorage.getItem('trips');
    this.trips = storedTrips ? JSON.parse(storedTrips) : this.getDefaultTrips();
  }

  private getDefaultTrips(): Trip[] {
    return [];
  }

  findAll(): Trip[] {
    return this.trips;
  }

  findOne(id: string): Trip | null {
    return this.trips.find((trip) => trip.id === id) ?? null;
  }

  addTrip(trip: Omit<Trip, 'id'>): void {
    const newTrip: Trip = { ...trip, id: this.generateId() };
    this.trips.push(newTrip);
    this.saveTrips();
  }

  deleteTrip(id: string): void {
    this.trips = this.trips.filter((trip) => trip.id !== id);
    this.saveTrips();
  }

  generateRandomTrip(): Trip {
    return {
      id: this.generateId(),
      destination: DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)],
      description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
      date: new Date().toISOString().split('T')[0],
      price: PRIX[Math.floor(Math.random() * PRIX.length)],
    };
  }
}
