import { Injectable } from '@angular/core';
import { Observable, Subject, pipe, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckEditService {

  currentEdit = new Subject<Array<any>>();
  currentDeck = new Array<any>();

  constructor() { }

  addCard(card: any) {
    this.currentEdit.pipe(map(deck)=> deck.push(card))
  }
}
