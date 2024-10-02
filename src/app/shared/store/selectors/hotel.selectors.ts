import { createSelector } from '@ngrx/store';
import { AppState } from '../models/hotel.model';

export const selectWishlist = (state: AppState) => state.wishlist;
export const selectBookings = (state: AppState) => state.bookings;

export const selectWishlistCount = createSelector(
  selectWishlist,
  (wishlist) => wishlist.length
);

export const selectBookingsCount = createSelector(
  selectBookings,
  (bookings) => bookings.length
);
