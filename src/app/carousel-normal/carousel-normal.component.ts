import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-normal',
  templateUrl: './carousel-normal.component.html',
  styleUrls: ['./carousel-normal.component.scss']
})
export class CarouselNormalComponent implements OnInit {

  @Input() images: string[];
  
  constructor() {}

  ngOnInit() {}

}
