import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coin } from '../coin';
import { CoinService } from '../coin-list.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.css']
})

export class ListCoinsComponent implements OnInit{

	search=''
	coins$!:Observable<Coin[]>;


  constructor(private CoinService : CoinService) {

   }

  ngOnInit(): void {
	this.coins$ = this.CoinService.getCoins()
  }


}
