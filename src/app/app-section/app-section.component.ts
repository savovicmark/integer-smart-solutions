import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../Models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})
export class AppSectionComponent implements OnInit {

  @Input() section: Section;

  constructor() { }

  ngOnInit() {
  }

}
