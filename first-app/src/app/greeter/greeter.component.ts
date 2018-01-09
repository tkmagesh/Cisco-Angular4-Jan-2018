import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	
	//state
	message : string = 'A dummy message';

	//behavior
	onGreetClick(userName){
		this.message = `Hi ${userName}, Have a nice day!`;
	}
}

