import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
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

  appareils : any[];

  constructor(private appareilService : AppareilService) {
      setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }

  OnEteindre() {
    if(confirm('Etes-vous sûr de vouloir vider vos chargeurs ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
