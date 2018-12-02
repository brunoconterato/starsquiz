import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() openDetails = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  showDetails() {
    this.openDetails.emit({
      fn: 'openDetails',
      payload: ''
    });
  }
}
