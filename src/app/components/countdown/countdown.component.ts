import {Component, Input, numberAttribute, OnInit} from '@angular/core';
import {interval, map, Observable, shareReplay, takeWhile, timer} from "rxjs";
import * as moment from 'moment-timezone';
import {TimeComponents} from "./timeComponents";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {

  @Input() dtString = "";

  timeRemaining$: Observable<TimeComponents> = new Observable<TimeComponents>();
  dt: Date = new Date();

  constructor() {
  }

  ngOnInit() {
    this.dt = new Date(this.dtString);

    this.timeRemaining$ = interval(1000).pipe(
      map(x => this.calcDateDiff()),
      shareReplay(1)
    )
  }

  private calcDateDiff(): TimeComponents {
    const dDay = this.dt.valueOf();

    const timeDifference = dDay - Date.now();

    let values:string[] = [];

    values[0] = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString(); // Days
    values[1] = Math.floor((timeDifference / (1000 * 60 * 60)) % 24).toString(); // Hours
    values[2] = Math.floor((timeDifference / (1000 * 60)) % 60).toString(); // Minutes
    values[3] = (Math.floor(timeDifference / 1000) % 60).toString(); // Seconds

    values.forEach((value, index) => {
      if(value.length == 1){
        values[index] = "0"+value;
      }
    });

    return {
      daysToDday: values[0],
      hoursToDday: values[1],
      minutesToDday: values[2],
      secondsToDday: values[3]
    };
  }
}
