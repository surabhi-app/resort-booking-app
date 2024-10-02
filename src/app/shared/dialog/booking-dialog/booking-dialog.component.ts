import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog'; 
import { Resort } from '../../store/models/resort.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Booking } from '../../store/models/booking.model';
import { Store } from '@ngrx/store';
import { addBooking } from '../../store/actions/hotel.actions';

@Component({
  selector: 'app-booking-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './booking-dialog.component.html',
  styleUrl: './booking-dialog.component.css'
})
export class BookingDialogComponent {
  bookingData: Booking = {
    name: '',
    checkin: null,
    checkout: null,
    guests: 1
  };

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<BookingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { favorites: Resort[] }, 
  private store: Store<{ bookingState: { bookings: Booking[] } }>) {}

   // Disable past dates
   minDate: Date = new Date();

// Check if the form is valid
isFormValid(): boolean {
  console.log(this.bookingData); // Debug: Log the booking data to check if it's properly updated
  return (
    !!this.bookingData.name &&
    !!this.bookingData.checkin &&
    !!this.bookingData.checkout &&
    this.bookingData.guests > 0
  );
}


// Method to handle booking submission
submitBooking(): void {
  if (this.isFormValid()) {
    // Dispatch the booking action
    this.store.dispatch(addBooking({ booking: this.bookingData }));

    this.dialog.open(SuccessDialogComponent, {
      width: '300px',
      data: { bookingDialogRef: this.dialogRef },
    });

    this.dialogRef.close();
  }
}

  get favorites(): Resort[] {
    return this.data.favorites;
  }
}
