import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonBadge, IonPopover} from "@ionic/angular";

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss'],
})
export class StatusBadgeComponent {
  @ViewChild('popover') popover: IonPopover | undefined;
  @Input() abbrev: string = "";
  @Input() description: string|undefined = undefined;

  isOpen = false;

  showPopover(e: MouseEvent) {
    if(this.popover) this.popover.event = e;
    this.isOpen = true;
  }
}
