import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HomepageService, HpItem} from "../../services/homepage/homepage.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  hpItems: HpItem[] = [];

  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private homePageService: HomepageService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
    });

    firstValueFrom(this.homePageService.hpItems$).then(hpItems => {
      this.hpItems = hpItems;

      hpItems.forEach((hpItem, i) => {
        this.form.addControl("ch" + (i + 1), new FormControl(hpItem.homepage));
      });

      this.form.valueChanges.subscribe(data => {
        this.hpItems.forEach((place, i) => {
          this.homePageService.setHome(i, data["ch" + (i + 1)]);
        });
      });
    })
  }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
