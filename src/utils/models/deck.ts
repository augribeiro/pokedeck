import { Card } from "pokemon-tcg-sdk-typescript/dist/sdk";

export class Deck {
  name: string;
  cardList: Array<Card>;

  constructor() {
    this.name = '';
    this.cardList = new Array<Card>();
  }
}