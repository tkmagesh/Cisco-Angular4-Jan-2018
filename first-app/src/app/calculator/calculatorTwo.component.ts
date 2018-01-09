import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-two',
	templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{

	//state

	model : CalculatorModel = new CalculatorModel();

	onCalculateClick(operation){
		switch (operation) {
			case "add":
				this.model.add();
				break;
			case "subtract":
				this.model.subtract();
				break;
			case "multiply":
				this.model.multiply();
				break;
			case "divide":
				this.model.divide();
				break;
		}
	}
}