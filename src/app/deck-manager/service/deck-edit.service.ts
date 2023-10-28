import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckEditService {

  currentEdit = new Subject<Array<any>>();
  private _deck = new Array<any>

  constructor() { }

  addCard(card: any) {
    this._deck.push(card);
    this.currentEdit.next(this._deck);
  }

  removeCard(card: any) {
    this._deck.splice(this._deck.findIndex(cardInDeck => cardInDeck.name === card.name));
    this.currentEdit.next(this._deck);
  }
}

