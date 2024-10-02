import { createAction, props } from '@ngrx/store';
import { Resort } from '../models/resort.model';
import { Booking } from '../models/booking.model';

export const addToFavorites = createAction(
  '[Resort] Add To Favorites',
  props<{ resort: Resort }>()
);

export const removeFromFavorites = createAction(
  '[Resort] Remove From Favorites',
  props<{ id: number }>()
);

export const addBooking = createAction(
  '[Booking] Add Booking',
  props<{ booking: Booking }>()
);




