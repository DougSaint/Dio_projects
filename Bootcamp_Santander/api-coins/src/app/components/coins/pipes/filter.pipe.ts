import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(coinsList: Array<any>, search:string): any {
	console.log(coinsList,search)
	if(coinsList)
		coinsList.filter((d) => d.name.indexOf(search)>-1)
	return coinsList;
  }

}
