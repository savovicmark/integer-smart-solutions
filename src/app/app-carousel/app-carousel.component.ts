import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrls: ['./app-carousel.component.scss']
})
export class AppCarouselComponent {

  constructor(private router: Router) { }

  systems(){
    this.router.navigate(['/systems'])
  }
  references(){
    this.router.navigate(['/references'])
  }
  contact(){
    this.router.navigate(['/contact'])
  }

}
