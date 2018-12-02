import { Component, OnInit } from '@angular/core';
import { Person } from '../game.interface';

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
    films: [],
    vehicles: [],
  };

  constructor() { }

  ngOnInit() {
  }

  open(person: Person) {
    this.person = person;
    $('#detailsModal').modal('show');
  }
}
