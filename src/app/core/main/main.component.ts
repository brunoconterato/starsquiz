import { Component, OnInit } from '@angular/core';
import { Planet, Specie, Vehicle, Film } from '../game/game.interface';
import { SwapiService } from '../game/swapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  initialData = {
    planets: new Array<Planet>(),
    species: new Array<Specie>(),
    vehicles: new Array<Vehicle>(),
    films: new Array<Film>(),
  };

  nextLoadPage = {
    planets: null,
    species: null,
    vehicles: null,
  };

  finishLoaded = {
    planets: false,
    species: false,
    vehicles: false,
    films: false,
  };

  constructor(private swapi: SwapiService) { }

  ngOnInit() {
    this.loadInitialData();
  }

  loadInitialData() {
    this.loadData('planets');
    this.loadData('species');
    this.loadData('vehicles');
    this.loadData('films');
  }

  loadData(type: string) {
    if (!this.nextLoadPage[type]) {
      this.nextLoadPage[type] = 1;
    }

    switch (type) {
      case 'planets':
        this.swapi.getPlanets(this.nextLoadPage.planets)
          .subscribe((response) => {
            this.makeArray(response, type);
          });
        break;
      case 'species':
        this.swapi.getSpecies(this.nextLoadPage.species)
          .subscribe((response) => {
            this.makeArray(response, type);
          });
        break;
      case 'vehicles':
        this.swapi.getVehicles(this.nextLoadPage.vehicles)
          .subscribe((response) => {
            this.makeArray(response, type);
          });
        break;
      case 'films':
        this.swapi.getFilms()
          .subscribe((response) => {
            this.makeArray(response, type);
          });
        break;
      default:
        console.error('Error: trying to get non existent entity:', type);
        break;
    }
  }

  makeArray(response, type: string) {
    this.initialData[type] = this.initialData[type].concat(response.results);
    if (response.next) {
      this.nextLoadPage[type] += 1;
      this.loadData(type);
    } else {
      this.finishLoaded[type] = true;

      if (this.checkLoadEnd()) {
        this.swapi.setData(this.initialData);
      }
    }
  }

  checkLoadEnd() {
    for (const key in this.finishLoaded) {
      if (!this.finishLoaded[key]) { return false; }
    }
    return true;
  }
}
