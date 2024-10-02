import { createReducer, on } from '@ngrx/store';
import { addBooking, addToFavorites, removeFromFavorites } from '../actions/hotel.actions';
import { Resort } from '../models/resort.model';
import { Booking } from '../models/booking.model';

export interface FavoriteState {
  favorites: Resort[];
  bookings: Booking[];
}

export const initialState: FavoriteState = {
  favorites: [],
  bookings: [] 
};

const _favoriteReducer = createReducer(
  initialState,

    // Favorite actions
  on(addToFavorites, (state, { resort }) => ({
    ...state,
    favorites: [...state.favorites, resort]
  })),
  on(removeFromFavorites, (state, { id }) => ({
    ...state,
    favorites: state.favorites.filter(item => item.id !== id)
  })),

   // Booking actions
 on(addBooking, (state, { booking }) => ({
  ...state,
  bookings: [...state.bookings, booking] // Add booking to state
}))
);



 
export function favoriteReducer(state: any, action: any) {
  return _favoriteReducer(state, action);
}





