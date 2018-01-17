import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';
import { BugServerService } from './services/bugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	sortBugBy : string = 'name';
	sortDescending : boolean = false;

	/*constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}*/

	constructor(private bugServer : BugServerService, private bugStorage : BugStorageService){
		this.bugServer
			.getAll()
			.then(bugs => this.bugs = bugs);
	}

	onNewBug(bug : IBug){
		this.bugs = [...this.bugs, bug];
	}

	onBugNameClick(bugToToggle : IBug){
		this.bugServer
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		for(let index=this.bugs.length-1; index >=0 ; index--){
			if (this.bugs[index].isClosed){
				this.bugServer
					.remove(this.bugs[index])
					.then(() => this.bugs.splice(index, 1));				
			}
		}
	}
}