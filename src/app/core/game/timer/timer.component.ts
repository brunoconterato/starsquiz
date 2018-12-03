import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

const TOTAL_TIME = 120;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Output() callback = new EventEmitter<any>();
  timeLeft: number = TOTAL_TIME;
  countdownNumber: any;
  interval;

  constructor() { }

  ngOnInit() {
    this.startTimer();
    this.countdownNumber = document.getElementById('countdown-number');
    this.setText();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.callback.emit({
          fn: 'finishGame',
        });
      }

      this.setText();
    }, 1000);
  }

  setText() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft - minutes * 60;

    this.countdownNumber.textContent = this.str_pad_left(minutes, '0', 2) + ':'
      + this.str_pad_left(seconds, '0', 2);
  }

  str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }
}
