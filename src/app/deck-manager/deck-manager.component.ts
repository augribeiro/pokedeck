import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DeckService } from '../../utils/services/deck.service';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';

@Component({
  selector: 'poke-deck-manager',
  templateUrl: './deck-manager.component.html',
  styleUrls: ['./deck-manager.component.css']
})
export class DeckManagerComponent implements OnInit, OnDestroy {

  groupedDeck = new Map<Card, number>;
  currentDeckName = '';
  deckSize = 0;

  @Output() changeSidebar = new EventEmitter<string>();

  constructor(public deckService: DeckService) { }

  ngOnInit(): void {
    this.deckService.currentEdit.subscribe(deckInEdit => {
      this.currentDeckName = Boolean(deckInEdit.name) ? 'New Deck' : deckInEdit.name;
      this.groupedDeck.clear();
      this.deckSize = this.deckService.deckSize
      deckInEdit.cardList.forEach(card => {
        if (this.groupedDeck.has(card)) {
          this.groupedDeck.set(card, this.groupedDeck.get(card)! + 1);
        } else {
          this.groupedDeck.set(card, 1);
        }
      })
    });
  }

  ngOnDestroy(): void {
    this.deckService.currentEdit.unsubscribe();
  }

  // usar um ENUM em futuras versões
  saveDeck() {
    this.deckService.saveDeck(this.currentDeckName);
    this.changeSidebar.emit('deck-list');
  }

  discardChanges() {
    this.changeSidebar.emit('deck-list');
  }

  removeCard(card: Card): void {
    this.deckService.removeCard(card);
  }

}
