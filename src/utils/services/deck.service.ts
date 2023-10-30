import { Injectable } from '@angular/core';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { Subject } from 'rxjs';
import { Deck } from 'src/utils/models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  currentEdit = new Subject<Deck>();
  private _currentDeck: Deck;
  savedDecks = new Array<Deck>();

  constructor() {
    this._currentDeck = new Deck();
    this.currentEdit.next(this._currentDeck);
  }

  get name() {
    return this._currentDeck.name;
  }

  set name(name: string) {
    this._currentDeck.name = name;
  }

  addCard(card: Card): void {
    if (this.canAddCard(card, this._currentDeck)) {
      this._currentDeck.cardList.push(card);
      this.currentEdit.next(this._currentDeck);
    }
  }

  removeCard(card: Card) {
    const cardIndex = this._currentDeck.cardList.findIndex(cardInDeck => cardInDeck.name === card.name && cardInDeck.id === card.id);

    // if card not found, do nothing (there's probably a fancier way to do this, but I'm tired :( )
    if (cardIndex === -1) { return; }

    this._currentDeck.cardList.splice(cardIndex, 1);
    this.currentEdit.next(this._currentDeck);
  }


  // returns deck index if found, -1 otherwise
  // extracted into function in case I have time to make a deck search ( probably won't ): )
  findDeckIndex(deckName: string): number {
    return this.savedDecks.findIndex((savedDeck) => this._currentDeck.name === savedDeck.name);
  }

  saveDeck() {
    const deckIndex = this.findDeckIndex(this._currentDeck.name);

    if (deckIndex >= 0) {
      this.savedDecks[deckIndex] = this._currentDeck;
    } else {
      this.savedDecks.push(this._currentDeck);
    }

    this.resetDeck();
  }

  discardChanges() {
    this.resetDeck();
  }

  resetDeck() {
    this._currentDeck = new Deck();
    this.currentEdit.next(this._currentDeck);
    console.log(this.savedDecks)
  }

  deleteDeck() {
    const deckIndex = this.findDeckIndex(this._currentDeck.name)
    this.savedDecks.splice(deckIndex, 1);
    this.resetDeck();
  }

  containsCard(card: Card) {
    const cardIndex = this._currentDeck.cardList.findIndex(cardInDeck => cardInDeck.name === card.name && cardInDeck.id === card.id);

    return cardIndex === -1 ? false : true;
  }

  private canAddCard(card: Card, deck: Deck): boolean {
    if (deck.cardList.length + 1 === 60) { return false }

    const repeatedCards = deck.cardList.filter(cardInDeck => cardInDeck.name === card.name).length
    return repeatedCards >= 4 ? false : true;
  }
}

