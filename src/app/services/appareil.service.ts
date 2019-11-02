import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'R-301',
      ammo: 'FULL'
    },
    {
      id: 2,
      name: 'PeaceKeaper',
      ammo: 'FULL'
    },
    {
      id: 3,
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

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
}