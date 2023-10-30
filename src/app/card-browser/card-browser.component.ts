import { Component, OnInit } from '@angular/core';
import { ApiRequesterService } from '../api-requester/api-requester.service';
import { DeckEditService } from '../deck-manager/service/deck-edit.service';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';

@Component({
  selector: 'poke-card-browser',
  templateUrl: './card-browser.component.html',
  styleUrls: ['./card-browser.component.css']
})
export class CardBrowserComponent implements OnInit {

  inputValue = '';
  cardList!: null;
  disableRemove = true;

  constructor(private apiRequester: ApiRequesterService, private deckEditService: DeckEditService) { }

  ngOnInit() {
    this.deckEditService.currentEdit.subscribe(deck => console.log(deck))
    this.filter();
  }

  filter(): void {
    this.apiRequester.searchByName(this.inputValue).subscribe((resp) => {
      this.cardList = resp.data;
    });
  }

  addCard(card: Card): void {
    this.deckEditService.addCard(card);
  }

  containsCard(card: Card) {
    return this.deckEditService.containsCard(card);
  }

  removeCard(card: Card): void {
    this.deckEditService.removeCard(card);
  }

  viewDetail(card: Card) {
    return card;
  }

}
