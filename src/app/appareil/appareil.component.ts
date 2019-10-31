import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  ammo: string = 'EMPTY';

  constructor() { }

  ngOnInit() {
  }

  getNumberAmmo() {
    return this.ammo;
  }

}