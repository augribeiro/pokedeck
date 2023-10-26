import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequesterService {

  // TO-DO: Ideally this key shouldn't be here, but for simplicity's sake, I decided to keep it here temporarily
  private API_KEY = '293fdc79-846a-4e5e-bb1f-e7ae47f0640a';
  private baseApi = 'https://api.pokemontcg.io/v2/cards';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
  }

  private getHeaders() {
    return this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('X-Api-Key', this.API_KEY);
  }

  searchByName(name: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.baseApi}/?q=name:${name}*`, { headers })
  }

  // testCall(): void {
  //   const headers = this.headers;
  //   this.http.get(`${this.baseApi}`, { headers }).subscribe();
  // }
}