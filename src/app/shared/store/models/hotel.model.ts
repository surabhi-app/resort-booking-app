export interface Hotel {
    id: number;
    name: string;
    description: string;
    // Add more properties as needed
  }
  
  export interface AppState {
    wishlist: Hotel[];
    bookings: Hotel[];
  }