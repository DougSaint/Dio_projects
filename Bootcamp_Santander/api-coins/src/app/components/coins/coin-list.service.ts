import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Coin } from './coin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CoinService {

	private url = 'https://api.nomics.com/v1/currencies/ticker?key=f0bf800bd2596f9a7823cca75e7c383139bb2ac0&convert=BRL'


  constructor(private http:HttpClient) { }

  getCoins():Observable<Coin[]>{
		return this.http.get<Coin[]>(this.url)
  }
}
