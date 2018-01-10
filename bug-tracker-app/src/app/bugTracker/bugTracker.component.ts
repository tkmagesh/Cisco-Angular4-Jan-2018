import { Component } from '@angular/core';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : string[] = [];

	onCreateNewClick(bugName : string){
		this.bugs.push(bugName);
	}
}