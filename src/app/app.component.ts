import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
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
  secondes: number;
  counterSub: Subscription;

  constructor() { }

  ngOnInit() {
    const counter = Observable.interval(1000);

    this.counterSub = counter.subscribe(
     (value) => {
       this.secondes = value;
     },
     (error) => {
      console.log("An error occured : " + error);
     },
     () => {
       console.log("Complete !");
     }
    )
  }

  ngOnDestroy() {
    this.counterSub.unsubscribe();
  }
}
