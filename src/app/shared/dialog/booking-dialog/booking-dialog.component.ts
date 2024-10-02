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
    FormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './booking-dialog.component.html',
  styleUrl: './booking-dialog.component.css'
})
export class BookingDialogComponent {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<BookingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { favorites: Resort[] }) {}


  submitBooking(): void {
    this.dialog.open(SuccessDialogComponent, {
      width: '300px',
      data: { bookingDialogRef: this.dialogRef }
    });
  }

  get favorites(): Resort[] {
    return this.data.favorites;
  }
}
