import { Component } from '@angular/core';

@Component({
	selector : 'app-products',
	template : `
		<label>Product Name :</label>
		<input type="text" #txtProductName />
		<input type="button" value="Add Product" (click)="onAddProductClick(txtProductName.value)" />
		<ol>
			<li *ngFor="let item of list">{{item}}</li>
		</ol>
	`
})
export class ProductsComponent{
	list : string[] = ['Pen' , 'Pencil', 'Marker'];

	onAddProductClick(productName){
		this.list.push(productName);
	}
}