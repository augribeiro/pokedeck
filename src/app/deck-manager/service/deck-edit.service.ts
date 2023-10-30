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
  private _savedDecks = new Map<Deck, string>();

  constructor() {
    this._deck = new Deck();
    this.currentEdit.next(this._deck);
  }

  get name() {
    return this._deck.name;
  }

  addCard(card: Card): void {
    if (this.canAddCard(card, this._deck)) {
      this._deck.cardList.push(card);
      this.currentEdit.next(this._deck);
    }
  }

  removeCard(card: Card) {
    const cardIndex = this._deck.cardList.findIndex(cardInDeck => cardInDeck.name === card.name && cardInDeck.id === card.id);

    // if card not found, do nothing (there's probably a fancier way to do this, but I'm tired :( )
    if (cardIndex === -1) { return; }

    this._deck.cardList.splice(cardIndex, 1);
    this.currentEdit.next(this._deck);
  }

  saveDeck() {
    this._savedDecks.set(this._deck, this._deck.name);
  }

  deleteDeck() {
    this._deck = new Deck();
    this.currentEdit.next(this._deck);
  }

  containsCard(card: Card) {
    const cardIndex = this._deck.cardList.findIndex(cardInDeck => cardInDeck.name === card.name && cardInDeck.id === card.id);

    return cardIndex === -1 ? false : true;
  }

  private canAddCard(card: Card, deck: Deck): boolean {
    if (deck.cardList.length + 1 === 60) { return false }

    const repeatedCards = deck.cardList.filter(cardInDeck => cardInDeck.name === card.name).length
    return repeatedCards >= 4 ? false : true;
  }
}

