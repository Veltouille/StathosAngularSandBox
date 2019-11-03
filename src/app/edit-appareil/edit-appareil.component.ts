import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.css']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'EMPTY';

  constructor(private appareilService: AppareilService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const ammo = form.value['ammo'];
    this.appareilService.addAppareil(name, ammo);
    this.router.navigate(['/appareils']);
  } 

}