import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  title = "Apex Stathos";
  isAuth = false;

  appareilOne = 'P2020';
  appareilTwo = 'Mozambique';
  appareilThree = 'Alternator';

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
