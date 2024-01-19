import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Launches, Result, Status} from "../../models/launches";
import {LaunchlibService} from "../../services/launchlib/launchlib.service";

@Component({
  selector: 'app-Launches',
  templateUrl: 'launches.page.html',
  styleUrls: ['launches.page.scss']
})
export class LaunchesPage {

  launches$: Observable<Launches>;
  constructor(
    private launchLibService: LaunchlibService
  ) {
    this.launches$ = this.launchLibService.getUpcoming$();
  }
}
