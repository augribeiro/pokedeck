import { Component, OnInit } from '@angular/core';
import { ApiRequesterService } from './api-requester/api-requester.service';
import { DeckService } from '../utils/services/deck.service';

@Component({
  selector: 'poke-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  expandedSidebar = true;
  showDeckList = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.expandedSidebar = !this.expandedSidebar;
  }
}
