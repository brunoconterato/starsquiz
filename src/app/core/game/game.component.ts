import { PagerService } from './pagination/pagination.service';
import { FinishModalComponent } from './finish-modal/finish-modal.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SwapiService } from './swapi.service';

import { Person, Vehicle, Film, Specie, Planet } from './game.interface';
import { Router } from '@angular/router';

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

  @Input()
  films: Array<Film>;

  @Input()
  vehicles: Array<Vehicle>;

  @Input()
  species: Array<Specie>;

  @Input()
  planets: Array<Planet>;

  people: Array<Person>;
  // peopleQuantity: number;
  peopleQuantity: number = 20;

  pager: any = {}; // pager object
  pagedItems: any[]; // paged items

  initialGameData: any;

  constructor(
    private pagerService: PagerService,
    private swapi: SwapiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initialGameData = this.swapi.getData();
    if (!this.initialGameData) {
      this.router.navigate(['/main']);
    }

    this.fetchData(1);
  }

  fetchData(page: number): void {
    this.swapi.getPeople(page)
      .subscribe(response => {
        // this.peopleQuantity = response.count;
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
