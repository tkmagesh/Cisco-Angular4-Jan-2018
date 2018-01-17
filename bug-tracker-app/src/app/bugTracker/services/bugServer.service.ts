import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';
import axios from 'axios';

@Injectable()
export class BugServerService{
	constructor(private bugOperations : BugOperationsService){

	}
	getAll() : Promise<IBug[]>{
		return axios
			.get('http://localhost:3000/bugs')
			.then(response => response.data);
	}
	addNew(bugName : string) : Promise<IBug>{
		let newBugData = this.bugOperations.createNew(bugName);
		return axios
			.post('http://localhost:3000/bugs', newBugData)
			.then(response => response.data);
	}
	toggle(bugToToggle : IBug) : Promise<IBug> {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return axios
			.put(`http://localhost:3000/bugs/${toggledBug.id}`, toggledBug)
			.then(response => response.data);	
	}
	remove(bug : IBug) : Promise<any>{
		return axios
			.delete(`http://localhost:3000/bugs/${bug.id}`)
			.then(response => response.data);	
	}
}