import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../game.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() set person(newPerson: Person) {
    this._person = newPerson;
  }

  @Output()
  callback = new EventEmitter<any>();

  _person: Person;
  constructor() { }

  ngOnInit() { }

  showDetails() {
    this.callback.emit({
      fn: 'openDetails',
      payload: this._person,
    });
  }
}
