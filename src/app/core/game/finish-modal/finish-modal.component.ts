import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-finish-modal',
  templateUrl: './finish-modal.component.html',
  styleUrls: ['./finish-modal.component.scss']
})
export class FinishModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open() {
    $('#finishModal').modal({
      show: true,
      backdrop: 'static',
      keyboard: false
  })
  }
}
