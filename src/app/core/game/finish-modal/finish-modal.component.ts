import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

declare var $: any;

@Component({
  selector: 'app-finish-modal',
  templateUrl: './finish-modal.component.html',
  styleUrls: ['./finish-modal.component.scss']
})
export class FinishModalComponent implements OnInit {
  @Input() set boardPoints(pts) {
    this._boardPoints = pts;
  }
  _boardPoints: any;
  totalPoints: number = 0;

  constructor() { }

  ngOnInit() {
  }

  open() {
    $('#finishModal').modal({
      show: true,
      backdrop: 'static',
      keyboard: false
    });

    this.finishGame();
  }

  finishGame() {
    this.totalPoints = 0;
    const boardArr = _.values(this._boardPoints);

    for (let i = 0; i < boardArr.length; i++) {
      if (boardArr[i].correct && !boardArr[i].gotInfo) {
        this.totalPoints += 10;
      } else if (boardArr[i].correct && boardArr[i].gotInfo) {
        this.totalPoints += 5;
      }
    }

  }
}
