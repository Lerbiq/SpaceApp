import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaunchesPage } from './launches.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { LaunchesRoutingModule } from './launches-routing.module';
import {CountdownComponent} from "../../components/countdown/countdown.component";
import {IonImg} from "@ionic/angular/standalone";
import {StatusBadgeComponent} from "../../components/status-badge/status-badge.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LaunchesRoutingModule
  ],
  exports: [
    CountdownComponent,
    StatusBadgeComponent
  ],
  declarations: [LaunchesPage, CountdownComponent, StatusBadgeComponent]
})
export class LaunchesModule {}
