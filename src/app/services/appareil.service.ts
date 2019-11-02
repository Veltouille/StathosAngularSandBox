import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      name: 'R-301',
      ammo: 'FULL'
    },
    {
      name: 'PeaceKeaper',
      ammo: 'FULL'
    },
    {
      name: 'ARC-STAR',
      ammo: 'EMPTY'
    }
  ];

  switchOnAll() {
    for(let appareil of this.appareils){
      appareil.ammo = 'FULL';
    }
  }

  switchOffAll() {
    for(let appareil of this.appareils){
      appareil.ammo = 'EMPTY';
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].ammo = 'FULL';
  }

  switchOffOne(i: number) {
    this.appareils[i].ammo = 'EMPTY';
  }
}