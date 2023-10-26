import { Component, OnInit } from '@angular/core';
import { ApiRequesterService } from './api-requester/api-requester.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedeck';
  inputValue = '';
  cardList!: null;

  constructor(private apiRequester: ApiRequesterService) { }

  ngOnInit() {

  }

  filter() {
    this.apiRequester.searchByName(this.inputValue).subscribe((resp) => {
      this.cardList = resp.data;
    });
  }
}
