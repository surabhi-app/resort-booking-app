import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Resort } from '../../store/models/resort.model';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { removeFromFavorites } from '../../store/actions/hotel.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite-dialog',
  standalone: true,
  imports: [MatListModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './favorite-dialog.component.html',
  styleUrl: './favorite-dialog.component.css'
})
export class FavoriteDialogComponent {
  favorites$: Observable<Resort[]>;

  constructor(
    private dialogRef: MatDialogRef<FavoriteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public favorites: Resort[], private store: Store<{ favoriteState: { favorites: Resort[] } }>,
    
    
  ) { this.favorites$ = this.store.select(state => state.favoriteState.favorites);}

  closeDialog(): void {
    this.dialogRef.close();
  }

  // removeFromFavorites(index: number) {
  //   const resort = this.favorites[index];
  //   this.store.dispatch(removeFromFavorites({ id: resort.id })); 
  //   this.favorites.splice(index, 1); 
    
  // }

  removeFromFavorites(resort: Resort) {
    this.store.dispatch(removeFromFavorites({ id: resort.id })); // Dispatch the remove action with the resort id
  }
}
