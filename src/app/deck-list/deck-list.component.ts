import { Component, EventEmitter, Output } from '@angular/core';
import { take } from 'rxjs';
import { Deck } from 'src/utils/models/deck';
import { DeckService } from 'src/utils/services/deck.service';

@Component({
  selector: 'poke-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent {

  deckList = new Array<Deck>;
  @Output() changeSidebar = new EventEmitter<string>();

  constructor(public deckService: DeckService) {
    this.deckService.currentEdit.subscribe((deck: Deck) => {
      this.deckList = this.deckService.savedDecks;
    })
  }

  createDeck() {
    this.deckService.resetDeck();
    this.changeSidebar.emit('deck-manager');
  }

  deleteDeck(deck: Deck) {
    this.deckService.deleteDeck(deck);
  }

  editDeck(deck: Deck) {
    this.deckService.editDeck(deck);
    this.changeSidebar.emit('deck-manager');
  }

}
