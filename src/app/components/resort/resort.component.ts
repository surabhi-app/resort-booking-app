import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from '../../shared/dialog/booking-dialog/booking-dialog.component';
import { ResortService } from '../../resort.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/models/hotel.model';
import { addToFavorites } from '../../shared/store/actions/hotel.actions';
import { Resort } from '../../shared/store/models/resort.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar and MatSnackBarModule

@Component({
  selector: 'app-resort',
  standalone: true,
  imports: [MatSnackBarModule,MatCardModule,MatButtonModule,CommonModule, MatIconModule,BookingDialogComponent],
  templateUrl: './resort.component.html',
  styleUrl: './resort.component.css'
})

export class ResortComponent implements OnInit{
  resorts: Resort[] = [];

  constructor(private resortService: ResortService, public dialog: MatDialog, private store: Store<AppState>, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchResorts();
  }

  fetchResorts(): void {
    this.resortService.getResorts().subscribe(
      (data) => {
        this.resorts = data; 
      },
      (error) => {
        console.error('Error fetching resorts:', error); 
      }
    );
  }

  openBookingDialog(): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      width: '400px',  
      data: {} 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  
  // Dispatch action to add to favorites
  addToFavorites(resort: Resort) {
    this.store.dispatch(addToFavorites({ resort }));
    this.showAddedToFavoritesMessage();
  }

  showAddedToFavoritesMessage() {
    this.snackBar.open('Added to favorite!', '', {
      duration: 2000,  
      horizontalPosition: 'center', 
      panelClass: ['center-snackbar'] 
    });
  }

}
