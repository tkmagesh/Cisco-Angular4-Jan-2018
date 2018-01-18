import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugServerService } from './services/bugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
/*
export class BugTrackerComponent{
	bugs : IBug[] = [];
	sortBugBy : string = 'name';
	sortDescending : boolean = false;


	constructor(private bugServer : BugServerService){
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
					.then(() => this.bugs = this.bugs.filter(bug => bug.id !== this.bugs[index].id));				
			}
		}
	}
}
*/
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];
	sortBugBy : string = 'name';
	sortDescending : boolean = false;


	constructor(private bugServer : BugServerService){
		
	}

	async ngOnInit(){
		this.bugs = await this.bugServer.getAll();
	}

	onNewBug(bug : IBug){
		this.bugs = [...this.bugs, bug];
	}

	async onBugNameClick(bugToToggle : IBug){
		let toggledBug = await this.bugServer.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}

	async onRemoveClosedClick(){
		/*for(let index=this.bugs.length-1; index >=0 ; index--){
			if (this.bugs[index].isClosed){
				await this.bugServer.remove(this.bugs[index])
				this.bugs = this.bugs.filter(bug => bug.id !== this.bugs[index].id);
			}
		}*/
		let closedBugs = this.bugs.filter(bug => bug.isClosed);
		closedBugs.forEach(async closedBug => {
			await this.bugServer.remove(closedBug);
			this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id);
		});
	}
}