import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeckEditService } from './service/deck-edit.service';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';

@Component({
  selector: 'poke-deck-manager',
  templateUrl: './deck-manager.component.html',
  styleUrls: ['./deck-manager.component.css']
})
export class DeckManagerComponent implements OnInit, OnDestroy {

  groupedDeck = new Map<Card, number>;

  constructor(public deckEditService: DeckEditService) {
  }

  ngOnInit(): void {
    this.deckEditService.currentEdit.subscribe(deckInEdit => {
      this.groupedDeck.clear();
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
    this.deckEditService.currentEdit.unsubscribe();
  }

  saveDeck() {
    this.deckEditService.saveDeck();
  }

  removeCard(card: Card): void {
    this.deckEditService.removeCard(card);
  }

}
