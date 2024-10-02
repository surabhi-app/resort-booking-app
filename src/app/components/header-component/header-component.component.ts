import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Resort } from '../../shared/store/models/resort.model';
import { FavoriteDialogComponent } from '../../shared/dialog/favorite-dialog/favorite-dialog.component';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDialogModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  favoriteCount$: Observable<number>;
  favorites$: Observable<Resort[]>;

  constructor(private store: Store<{ favoriteState: { favorites: Resort[] } }>, private dialog: MatDialog) {
    // Select the count of favorite items from the store
    this.favoriteCount$ = this.store.select(state => state.favoriteState.favorites.length);
    this.favorites$ = this.store.select(state => state.favoriteState.favorites);
  }

  openFavoritesDialog() {
    // Open the dialog only once when the user clicks the favorites button
    this.favorites$.pipe(take(1)).subscribe(favorites => {
      this.dialog.open(FavoriteDialogComponent, {
        width: '500px',
        height: 'auto',
        minHeight: '200px',
        data: favorites 
      });
    });
  }
  

  

}
