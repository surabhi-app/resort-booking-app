// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';

// import * as hotelActions from '../actions/hotel.actions';

// @Injectable()
// export class HotelEffects {

//   addToBookings$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(hotelActions.addToBookings),
//       mergeMap(({ hotel }) =>
//         of(hotelActions.addToBookingsSuccess({ hotel }))
//       )
//     )
//   );

//   constructor(private actions$: Actions) {}
// }

