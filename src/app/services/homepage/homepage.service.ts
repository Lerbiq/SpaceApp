import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Preferences} from "@capacitor/preferences";

export interface HpItem{
  name: string;
  homepage: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private privateHpItems: HpItem[] = [
    {
      name:"Image of the day",
      homepage: true
    },
    {
      name:"Closest launch",
      homepage: true
    }
  ];

  private get hpItems() {
    return this.privateHpItems;
  }

  private privateHpItemsSubject = new ReplaySubject<HpItem[]>(1);
  get hpItems$(){
    return this.privateHpItemsSubject.asObservable();
  }
  constructor() {
    Preferences.get({key: 'hpItems'}).then(data => {
      if(data.value){
        const hpItems = JSON.parse(data.value);
        this.privateHpItemsSubject.next(hpItems as HpItem[]);
      }else{
        this.privateHpItemsSubject.next(this.hpItems);
      }
    })
  }

  async setHome(index: number, active: boolean){
    this.privateHpItems[index].homepage = active;
    this.privateHpItemsSubject.next(this.privateHpItems);

    await Preferences.set({
      key: 'places',
      value: JSON.stringify(this.privateHpItems),
    });
  }
}
