import { DetailsModalComponent } from './details-modal/details-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @ViewChild(DetailsModalComponent)
  detailsModal: DetailsModalComponent;
  cards: Array<any>;

  constructor() { }

  ngOnInit() {
    this.cards = new Array(100);
  }

  eventReceiver(ev) {
    console.log('evvent', ev);
    this.detailsModal.open();
  }
}
