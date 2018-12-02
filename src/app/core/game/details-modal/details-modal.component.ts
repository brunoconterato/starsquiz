import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../game.interface';
import * as _ from 'lodash';

import { IMAGE_URLS } from '../game.images';

declare var $: any;

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {
  person: Person = {
    name: '',
    species: [],
    height: 0,
    hair_color: '',
    homeworld: '',
    planets: '',
    films: [],
    vehicles: [],
  };

  @Input() data: any;

  speciesTxt = '';
  filmsTxt = '';
  vehiclesTxt = '';
  planetsTxt = '';

  imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

  open(person: Person) {
    this.person = person;

    this.parseData();
    $('#detailsModal').modal('show');
  }

  parseData() {
    if (this.person.name && IMAGE_URLS[this.person.name]) {
      this.imageUrl = IMAGE_URLS[this.person.name];
    }
    this.person['planets'] = this.person['homeworld'];
    for (const type of ['species', 'vehicles', 'films', 'planets']) {
      if (this[type + 'Txt'] !== null) {
        this[type + 'Txt'] = '';

        if (this.person[type] instanceof Array) {
          let enteredForLoop = false;
          for (let i = 0; i < this.person[type].length; i++) {
            const txt = this.getText(this.data[type], this.person[type][i], type);
            this.concatText(txt, i, this.person[type].length, type + 'Txt');
            enteredForLoop = true;
          }
          if (!enteredForLoop) {
            this[type + 'Txt'] = 'n/a';
          }
        } else if (typeof this.person[type] === 'string') {
          this[type + 'Txt'] = _.find(this.data[type], el => el.url === this.person[type]).name || 'n/a';
        }
      }
    }
  }

  getText(dataArr, url: string, type): number {
    let key = '';
    switch (type) {
      case 'films':
        key = 'title';
        break;
      default:
        key = 'name';
    }
    return _.find(dataArr, el => el.url === url)[key];
  }

  concatText(txt, index, len, varName) {
    if (index < len - 2) {
      this[varName] += txt + ', ';
    } else if (index === len - 2) {
      this[varName] += txt + ' and ';
    } else {
      this[varName] += txt + '.';
    }
  }
}
