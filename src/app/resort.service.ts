import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResortService {
  private apiUrl = 'https://66f57ba84ff096dbc754953e.mockapi.io/api/v1/resort/resorts';

  constructor(private http: HttpClient) { }

  getResorts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
