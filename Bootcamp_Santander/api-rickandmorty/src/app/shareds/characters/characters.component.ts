import { Component, OnInit } from '@angular/core';
import { ListCharactersService } from '../services/list-characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit {

	characters!: Array<any>

  constructor(private listCharacters:ListCharactersService) { }

  ngOnInit(): void {
	this.getList();
  }
  getList(){
	this.listCharacters.getList().subscribe((result) =>{
		this.characters = result.results
		console.log(this.characters)
	})
  }
}
