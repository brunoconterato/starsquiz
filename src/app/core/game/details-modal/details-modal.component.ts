import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open() {
    $('#detailsModal').modal('show');
  }
}
