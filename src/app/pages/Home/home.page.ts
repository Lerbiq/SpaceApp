import { Component } from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";
import {IOTD} from "../../models/iotd";
import {IotdService} from "../../services/nasa/iotd.service";
import {ModalController} from "@ionic/angular";
import {Launches} from "../../models/launches";
import {LaunchlibService} from "../../services/launchlib/launchlib.service";
import {SettingsPage} from "../settings/settings.page";
import {HomepageService, HpItem} from "../../services/homepage/homepage.service";

@Component({
  selector: 'app-Home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  iotd$: Observable<IOTD>;
  launch$: Observable<Launches>;
  isDetailOpen = false;

  private cards: HpItem[] = [];
  constructor(
    private iotdService: IotdService,
    private launchlibService: LaunchlibService,
    private homePageService: HomepageService,
    private modalCtrl: ModalController,
  ) {
    this.iotd$ = this.iotdService.get$();
    this.launch$ = this.launchlibService.getUpcoming$(1);
    this.initHome();
  }

  setOpen(isOpen: boolean){
    this.isDetailOpen = isOpen;
  }

  isOnHomePage(name: string){
    let item = this.cards.find(c => c.name === name);
    if(typeof item === undefined) return false;
    return item?.homepage === true;
  }

  private async initHome(){
    this.cards = [];

    const hpItems = await firstValueFrom(this.homePageService.hpItems$);

    hpItems.forEach(hpItem => {
      if (hpItem.homepage) {
        this.cards.push(hpItem);
      }
    })
  }

  async openSettings() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    await modal.present();

    modal.onWillDismiss().then(_ => {
      this.initHome();
    });
  }
}
