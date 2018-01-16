import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	sortBugBy : string = '';
	sortDescending : boolean = false;

	private _bugOperations : BugOperationsService;

	constructor(bugOperations : BugOperationsService){
		this._bugOperations = bugOperations;
	}

	onCreateNewClick(bugName : string){
		let newBug : IBug = this._bugOperations.createNew(bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bug : IBug){
		this._bugOperations.toggle(bug);
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