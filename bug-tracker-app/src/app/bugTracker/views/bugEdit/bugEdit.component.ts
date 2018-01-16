import { Component, Output, EventEmitter } from '@angular/core';
import { IBug } from '../../models/IBug';
import { BugStorageService } from '../../services/bugStorage.service';

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

	constructor(private bugStorage : BugStorageService){

	}
	onCreateNewClick(bugName : string){
		let newBug : IBug = this.bugStorage.addNew(bugName);
		this.bugCreated.emit(newBug);
	}
}