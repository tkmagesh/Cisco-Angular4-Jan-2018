import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	sortBugBy : string = '';
	sortDescending : boolean = false;

	onCreateNewClick(bugName : string){
		let newBug : IBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bug : IBug){
		bug.isClosed = !bug.isClosed;
	}

	onRemoveClosedClick(){
		for(let index=0, count=this.bugs.length; index < count; index++){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
	}

	getClosedCount(){
		console.log('getClosedCount triggered');
		let closedCount = 0;
		for(let index=0, count=this.bugs.length; index < count; index++){
			if (this.bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}
}