import { Component, OnInit } from '@angular/core';
import { ApiRequesterService } from '../api-requester/api-requester.service';
import { DeckEditService } from '../deck-manager/service/deck-edit.service';

@Component({
  selector: 'poke-card-browser',
  templateUrl: './card-browser.component.html',
  styleUrls: ['./card-browser.component.css']
})
export class CardBrowserComponent implements OnInit {

  inputValue = '';
  cardList!: null;

  constructor(private apiRequester: ApiRequesterService, private deckEditService: DeckEditService) { }

  ngOnInit() {
    this.deckEditService.currentEdit.subscribe(deck => console.log(deck))
  }

  filter() {
    this.apiRequester.searchByName(this.inputValue).subscribe((resp) => {
      this.cardList = resp.data;
    });
  }

  addCard(card: any) {
    console.log('aaa')
    this.deckEditService.addCard(card);
  }

  viewDetail(card: any) {
    return card;
  }

}
