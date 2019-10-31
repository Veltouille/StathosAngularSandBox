import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  appareilName = "P2020"
  ammo: string = 'EMPTY';

  constructor() { }

  ngOnInit() {
  }

}