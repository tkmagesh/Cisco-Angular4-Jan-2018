import { Component, Input } from '@angular/core';

@Component({
	selector : 'calculator-result',
	styleUrls : ['calculatorResult.component.css'],
	template : `<div [ngClass]="{positive : data >= 0, negative : data < 0}">
					{{data}}
				</div>`
})
export class CalculatorResultComponent{

	@Input()
	data : number = 0;

}