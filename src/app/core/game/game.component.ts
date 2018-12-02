import { FinishModalComponent } from './finish-modal/finish-modal.component';
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

  @ViewChild(FinishModalComponent)
  finishModal: FinishModalComponent;

  cards: Array<any>;

  constructor() { }

  ngOnInit() {
    this.cards = new Array(100);
  }

  eventReceiver(ev) {
    if (this[ev.fn]) {
      this[ev.fn](ev.payload);
    }
  }

  openDetails(payload) {
    this.detailsModal.open();
  }

  showFinish(payload) {
    this.finishModal.open();
  }
}
