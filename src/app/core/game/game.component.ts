import { PagerService } from './pagination/pagination.service';
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

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private pagerService: PagerService) { }

  ngOnInit() {
    this.cards = new Array(77);

    // initialize to page 1
    this.setPage(1);
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

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.cards.length, page);

    // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.pagedItems = this.cards.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
