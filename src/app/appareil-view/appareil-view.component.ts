import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth = false;
  
  appareils: any[]; 
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService,
              private authService: AuthService) { }

  ngOnInit() {
      this.isAuth = this.authService.isAuth;

      this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
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

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
}