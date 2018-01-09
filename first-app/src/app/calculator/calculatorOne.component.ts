import { Component } from '@angular/core';


@Component({
	selector : 'calculator-one',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{

	//state
	result : number = 0;
	n1 : number = 0;
	n2 : number = 0;

	//behavior
	onN1Change(value){
		this.n1 = parseInt(value, 10);
	}

	onN2Change(value){
		this.n2 = parseInt(value, 10);
	}

	onAddClick(){
		this.result = this.n1 + this.n2;
	}

	onSubtractClick(){
		this.result = this.n1 - this.n2;
	}

	onMultiplyClick(){
		this.result = this.n1 * this.n2;
	}

	onDivideClick(){
		this.result = this.n1 / this.n2;
	}
}