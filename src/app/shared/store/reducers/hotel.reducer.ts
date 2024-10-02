import { createReducer, on } from '@ngrx/store';
import { addToFavorites, removeFromFavorites } from '../actions/hotel.actions';
import { Resort } from '../models/resort.model';

export interface FavoriteState {
  favorites: Resort[];
}

export const initialState: FavoriteState = {
  favorites: []
};

const _favoriteReducer = createReducer(
  initialState,
  on(addToFavorites, (state, { resort }) => ({
    ...state,
    favorites: [...state.favorites, resort]
  })),
  on(removeFromFavorites, (state, { id }) => ({
    ...state,
    favorites: state.favorites.filter(item => item.id !== id)
  }))
);

export function favoriteReducer(state: any, action: any) {
  return _favoriteReducer(state, action);
}

