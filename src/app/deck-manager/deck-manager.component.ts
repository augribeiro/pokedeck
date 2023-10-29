import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeckEditService } from './service/deck-edit.service';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { Deck } from 'src/utils/models/deck';

@Component({
  selector: 'poke-deck-manager',
  templateUrl: './deck-manager.component.html',
  styleUrls: ['./deck-manager.component.css']
})
export class DeckManagerComponent implements OnInit, OnDestroy {

  deckInEdit = new Deck();

  constructor(private deckEditService: DeckEditService) {
  }

  ngOnInit(): void {
    this.deckEditService.currentEdit.subscribe(deckInEdit => this.deckInEdit = deckInEdit)
  }

  ngOnDestroy(): void {
    this.deckEditService.currentEdit.unsubscribe();
  }

}
