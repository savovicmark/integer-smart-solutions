import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../Models/card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent  {
  
  @Input() title: string;
  @Input() cards: Card[];
  

  constructor(private router: Router) { }

  navigate(){
    this.router.navigate([`/${this.title.toLowerCase()}`])
  }

}
