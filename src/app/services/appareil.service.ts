import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      name: 'R-301',
      status: 'FULL'
    },
    {
      name: 'PeaceKeaper',
      status: 'FULL'
    },
    {
      name: 'ARC-STAR',
      status: 'EMPTY'
    }
  ];

  constructor() { }

}