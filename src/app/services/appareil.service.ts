import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
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

  constructor(private httpClient: HttpClient) { }

  saveAppareilsToServer() {
    this.httpClient
     .post('https://sandboxvel.firebaseio.com//appareils.json', this.appareils)
     .subscribe(
       () => {
         console.log('Enregistrement terminé !');
       },
       (error) => {
         console.log('Erreur ! : ' + error);
       });
  }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for(let appareil of this.appareils){
      appareil.ammo = 'FULL';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for(let appareil of this.appareils){
      appareil.ammo = 'EMPTY';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].ammo = 'FULL';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].ammo = 'EMPTY';
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  addAppareil(name: string, ammo: string) {
    const appareilObject = {
      id: 0,
      name: '',
      ammo: ''
    };
    appareilObject.name = name;
    appareilObject.ammo = ammo;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}