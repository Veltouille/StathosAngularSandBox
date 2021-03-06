import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() ammo: string = 'EMPTY';
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService : AppareilService) { }

  ngOnInit() {
  }

  getNumberAmmo() {
    return this.ammo;
  }

  getColor() {
    if(this.ammo === 'FULL') {
      return 'green';
    } else if(this.ammo === 'EMPTY') {
      return 'red';
    }
  }

  onSwitch() {
    if(this.ammo === 'FULL'){
      this.appareilService.switchOffOne(this.index);
    } else if (this.ammo === 'EMPTY') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}