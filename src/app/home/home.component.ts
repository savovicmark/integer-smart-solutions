import { Component, OnInit } from '@angular/core';
import { Card } from '../Models/card.model';
import { Section } from '../Models/section.model';
import * as articles from '../Models/articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeCardsOne : Card[] = articles.homeCardsOne;
  homeSectionOne: Section = articles.homeSectionOne;
  homeCardsTwo: Card[] = articles.homeCardsTwo;
  homeSectionTwo: Section = articles.homeSectionTwo;

  constructor() { }

  ngOnInit() {
  }

}
