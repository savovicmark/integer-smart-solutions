import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss']
})
export class InvestComponent implements OnInit {

  images = [
    '../../assets/images/slike/mne1.jpg',
    '../../assets/images/slike/mne3.jpg',
    '../../assets/images/slike/mne5.jpg',
  ]

  constructor() { }

  ngOnInit() {
  }

}
