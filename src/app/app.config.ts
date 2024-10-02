import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { favoriteReducer } from './shared/store/reducers/hotel.reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ResortComponent } from './components/resort/resort.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { UserBookingComponentComponent } from './components/user-booking-component/user-booking-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: ResortComponent }, // Home component route
  { path: 'bookings', component: UserBookingComponentComponent }, // Route to Booking component
  // { path: 'contact', component: ContactUsComponent }, // Route to Contact Us component
];


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync('noop'),
    provideAnimations(),
    provideHttpClient(), provideStore(), provideEffects(),
    provideStore({ favoriteState: favoriteReducer }), 
    provideStoreDevtools(),
    importProvidersFrom(FormsModule), 
    importProvidersFrom(ReactiveFormsModule),  
    importProvidersFrom(MatDatepickerModule),  
    importProvidersFrom(MatInputModule),
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CommonModule]
};
