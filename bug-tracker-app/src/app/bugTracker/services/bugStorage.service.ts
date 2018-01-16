import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugStorageService{
	private storage = window.localStorage;
	private currentBugId : number = 0;

	constructor(private bugOperations : BugOperationsService){

	}
	addNew(bugName : string) : IBug{
		let newBug = this.bugOperations.createNew(bugName, ++this.currentBugId);
		this.save(newBug);
		return newBug;
	}
	toggle(bugToToggle : IBug) : void{
		this.bugOperations.toggle(bugToToggle);
		this.save(bugToToggle);
	}
	private save(bug : IBug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	getAll() : IBug[]{
		let result : IBug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				data = this.storage.getItem(key),
				bug = JSON.parse(data);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}
	remove(bug : IBug) : void{
		this.storage.removeItem(bug.id.toString());
	}
}