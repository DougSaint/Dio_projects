import { Component, Input, OnInit } from '@angular/core';
import { Coin } from './coin';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

	@Input()
	coin!:Coin

  constructor() { }

  ngOnInit(): void {
  }

}
