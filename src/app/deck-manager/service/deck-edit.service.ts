import { Injectable } from '@angular/core';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { Subject } from 'rxjs';
import { Deck } from 'src/utils/models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckEditService {

  currentEdit = new Subject<Deck>();
  private _deck: Deck;

  constructor() {
    this._deck = new Deck();
    this.currentEdit.next(this._deck);
  }

  addCard(card: Card) {
    this._deck.cardList.push(card);
    this.currentEdit.next(this._deck);
  }

  removeCard(card: Card) {
    const cardIndex = this._deck.cardList.findIndex(cardInDeck => cardInDeck.name === card.name && cardInDeck.id === card.id);

    // if card not found, do nothing (there's probably a fancier way to do this, but I'm tired :( )
    if (cardIndex === -1) { return; }

    this._deck.cardList.splice(cardIndex, 1);
    this.currentEdit.next(this._deck);
  }

  saveDeck() {
    // persist in session ? idk
  }

  deleteDeck() {
    this._deck = new Deck();
    this.currentEdit.next(this._deck);
  }
}

