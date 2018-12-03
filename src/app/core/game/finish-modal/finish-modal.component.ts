import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      points: [0, Validators.required]
    });
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

    this.form.get('points').setValue(this.totalPoints);
  }

  savePoints() {
    let leaderBoards = JSON.parse(localStorage.getItem('leaderBoards'));
    if (!leaderBoards) {
      leaderBoards = new Array<any>();
    }

    leaderBoards.push(this.form.value);

    localStorage.setItem('leaderBoards', JSON.stringify(leaderBoards));
  }
}
