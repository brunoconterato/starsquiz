import { Points } from './../game.interface';
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

  @Input() set points(pts: Points) {
    this._points = pts;
  }

  @Output()
  callback = new EventEmitter<any>();

  _person: Person;
  _points: Points;
  enteredValue: string;
  imageUrl;

  constructor() { }

  ngOnInit() { }

  showDetails() {
    this.callback.emit({
      fn: 'openDetails',
      payload: this._person,
    });
  }

  onNameChange(value) {
    this.enteredValue = value;

    this.callback.emit({
      fn: 'updatePoints',
      payload: {
        personName: this._person.name,
        enteredValue: value,
        gotInfo: this.points ? this.points.gotInfo || false : false,
      }
    });
  }
}
