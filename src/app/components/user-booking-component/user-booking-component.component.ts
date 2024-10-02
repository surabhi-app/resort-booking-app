import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Booking } from '../../shared/store/models/booking.model';
import { Store } from '@ngrx/store';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-user-booking-component',
  standalone: true,
  imports: [ MatListModule, CommonModule],
  templateUrl: './user-booking-component.component.html',
  styleUrl: './user-booking-component.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UserBookingComponentComponent implements OnInit{
  ngOnInit() {
    console.log('Method not implemented.');
  }

  bookings: Booking[] = [];

  constructor(private store: Store<{ bookingState: { bookings: Booking[] } }>) {
    // Fetch bookings from the store
    this.store.select('bookingState').subscribe(state => {
      this.bookings = state.bookings;
    });
  }
}
