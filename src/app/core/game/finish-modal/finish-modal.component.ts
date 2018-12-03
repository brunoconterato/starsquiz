import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  @Output() callback = new EventEmitter();

  _boardPoints: any;
  totalPoints: number = 0;

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
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

  cancel() {
    $('#finishModal').modal({
      show: false,
    });
    this.router.navigate(['/main']);

    this.resetData();
  }

  savePoints() {
    // stop here if form is invalid
    this.form.get('name').markAsTouched();
    this.form.get('email').markAsTouched();
    if (this.form.invalid) {
      return;
    }

    let leaderBoards = JSON.parse(localStorage.getItem('leaderBoards'));
    if (!leaderBoards) {
      leaderBoards = new Array<any>();
    }

    leaderBoards.push(this.form.value);

    localStorage.setItem('leaderBoards', JSON.stringify(leaderBoards));

    $('#finishModal').modal({
      show: false,
    });
    this.router.navigate(['/main']);

    this.resetData();
  }

  resetData() {
    this.form.reset();

    this.callback.emit({
      fn: 'resetData',
    });
  }
}
