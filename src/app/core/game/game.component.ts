import { PagerService } from './pagination/pagination.service';
import { FinishModalComponent } from './finish-modal/finish-modal.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwapiService } from './swapi.service';

import { Person, Vehicle, Film } from './game.interface';
import { forkJoin, Observable } from 'rxjs';

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

  people: Array<Person>;
  peopleQuantity: number;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  films: Array<Film>;
  vehicles: Array<Vehicle>;

  constructor(
    private pagerService: PagerService,
    private swapi: SwapiService,
  ) { }

  ngOnInit() {
    this.fetchData(1);

    const films$ = this.swapi.getFilms();

    const vehicles$ = this.swapi.getVehicles();

    forkJoin([films$, vehicles$])
      .subscribe((response: any) => {
        this.films = response[0].results;
        this.vehicles = response[1].results;
      });
  }

  fetchData(page: number): void {
    this.swapi.getPeople(page)
      .subscribe(response => {
        this.peopleQuantity = response.count;
        this.people = response.results;

        this.setPage(page);
      });
  }

  eventReceiver(ev) {
    if (this[ev.fn]) {
      this[ev.fn](ev.payload);
    }
  }

  openDetails(payload) {
    this.detailsModal.open(payload);
  }

  showFinish(payload) {
    this.finishModal.open();
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.peopleQuantity, page);

    // get current page of items
    this.pagedItems = this.people;
  }
}
