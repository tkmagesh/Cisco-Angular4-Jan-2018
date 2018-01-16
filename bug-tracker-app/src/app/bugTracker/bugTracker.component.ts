import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	sortBugBy : string = '';
	sortDescending : boolean = false;

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	onCreateNewClick(bugName : string){
		let newBug : IBug = this.bugStorage.addNew(bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bug : IBug){
		this.bugStorage.toggle(bug);
	}

	onRemoveClosedClick(){
		for(let index=0, count=this.bugs.length; index < count; index++){
			if (this.bugs[index].isClosed){
				this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index, 1);
			}
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