import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../game.interface';
import { IMAGE_URLS } from '../game.images';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() set person(newPerson: Person) {
    this._person = newPerson;

    if (this._person.name && IMAGE_URLS[this._person.name]) {
      this.imageUrl = IMAGE_URLS[this._person.name];
    }
  }

  @Output()
  callback = new EventEmitter<any>();

  _person: Person;
  imageUrl;

  constructor() { }

  ngOnInit() {

  }

  showDetails() {
    this.callback.emit({
      fn: 'openDetails',
      payload: this._person,
    });
  }
}
