import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IOTD} from "../../models/iotd";
import {IotdService} from "../../services/nasa/iotd.service";

@Component({
  selector: 'app-Home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  iotd$: Observable<IOTD>;
  constructor(
    private iotdService: IotdService
  ) {
    this.iotd$ = this.iotdService.get$();
  }



}
