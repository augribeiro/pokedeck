import { Component } from '@angular/core';
import { Deck } from 'src/utils/models/deck';
import { DeckService } from 'src/utils/services/deck.service';

@Component({
  selector: 'poke-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent {

  deckList = new Array<Deck>;

  constructor(public deckService: DeckService) {
    this.deckService.currentEdit.subscribe(() => {
      this.deckList = this.deckService.savedDecks;
    })
  }



}
