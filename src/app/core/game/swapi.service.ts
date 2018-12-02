import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person } from './game.interface';

const API_BASE = 'https://swapi.co/api';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  data: any;

  constructor(private http: HttpClient) { }

  getPeople(page: number): Observable<any> {
    return this.http.get(API_BASE + '/people/?page=' + page);
  }

  getFilms(): Observable<any> {
    return this.http.get(API_BASE + '/films/');
  }

  getVehicles(page: number): Observable<any> {
    return this.http.get(API_BASE + '/vehicles/?page=' + page);
  }

  getSpecies(page: number): Observable<any> {
    return this.http.get(API_BASE + '/species/?page=' + page);
  }

  getPlanets(page: number): Observable<any> {
    return this.http.get(API_BASE + '/planets/?page=' + page);
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
