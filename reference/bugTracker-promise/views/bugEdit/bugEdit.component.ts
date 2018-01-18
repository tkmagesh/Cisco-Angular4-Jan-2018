import { Component, Output, EventEmitter } from '@angular/core';
import { IBug } from '../../models/IBug';
import { BugServerService } from '../../services/bugServer.service';

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

	@Output()
	bugCreated : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugServer : BugServerService){

	}
	onCreateNewClick(bugName : string){
		this.bugServer
			.addNew(bugName)
			.then(newBug => this.bugCreated.emit(newBug));
	}
}