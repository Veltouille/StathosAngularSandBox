import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[]; 

  constructor(private appareilService: AppareilService) {
    
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