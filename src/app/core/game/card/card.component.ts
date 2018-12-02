import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() callback = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  showDetails() {
    this.callback.emit({
      fn: 'openDetails',
      payload: ''
    });
  }
}
