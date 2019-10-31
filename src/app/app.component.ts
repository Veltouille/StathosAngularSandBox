import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  name = 'Angular';
  title = "Apex Stathos";
  isAuth = false;

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

  constructor() {
        setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer(){
    console.log("On recharge");
  }
}
