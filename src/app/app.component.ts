import { Component, OnInit } from '@angular/core';
import { ApiRequesterService } from './api-requester/api-requester.service';
import { DeckEditService } from './deck-manager/service/deck-edit.service';

@Component({
  selector: 'poke-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
