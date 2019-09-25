import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.scss']
})
export class EstateComponent implements OnInit {

  images: string[] = [
    '../../assets/images/kavac1.jpg',
    '../../assets/images/kavac2.jpg',
    '../../assets/images/kavac3.jpg',
    '../../assets/images/kavac4.jpg',
    '../../assets/images/kavac5.jpg',
    '../../assets/images/kavac6.jpg',
    '../../assets/images/kavac7.jpg'
  ]

  constructor() { }

  ngOnInit() {
  }

}
