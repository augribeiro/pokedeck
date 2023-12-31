import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeckManagerComponent } from './deck-manager/deck-manager.component';
import { CardBrowserComponent } from './card-browser/card-browser.component';
import { DeckListComponent } from './deck-list/deck-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckManagerComponent,
    CardBrowserComponent,
    DeckListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
