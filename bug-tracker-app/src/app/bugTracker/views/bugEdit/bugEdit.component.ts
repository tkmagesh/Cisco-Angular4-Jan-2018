import { Component, Output, EventEmitter } from '@angular/core';
import { IBug } from '../../models/IBug';
import { BugServerService } from '../../services/bugServer.service';
import { Router } from '@angular/router';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create New" (click)="onCreateNewClick(txtBugName.value)">
		</section>
	`
})
export class BugEditComponent{

	

	constructor(private bugServer : BugServerService, private router : Router){

	}
	onCreateNewClick(bugName : string){
		this.bugServer
			.addNew(bugName)
			.subscribe(newBug => this.router.navigate(['bugs']));
	}
}