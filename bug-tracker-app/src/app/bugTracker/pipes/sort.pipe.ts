import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	private getComparerFor(attrName){
		return function(item1, item2){
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}
	private getDescendingComparerFor(comparer){
		return function(item1, item2){
			return comparer(item1, item2) * -1;
		}
	}
	transform(data : any[], attrName : string, isDescending : boolean = false) : any[]{
		if (!attrName) return data;
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}