import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'https://swapi.co/api';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getPeople(page: number): Observable<any> {
    return this.http.get(API_BASE + '/people/?page=' + page);
  }

  getFilms(): Observable<any> {
    return this.http.get(API_BASE + '/films/');
  }

  getVehicles(): Observable<any> {
    return this.http.get(API_BASE + '/vehicles/');
  }
}
