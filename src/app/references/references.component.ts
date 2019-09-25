import { Component, OnInit, Input } from '@angular/core';
import { Reference } from '../Models/reference.model';
import { references } from '../Models/references';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  references: Reference[] = references;

  constructor() { }

  ngOnInit() {
  }

}
