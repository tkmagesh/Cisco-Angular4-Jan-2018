import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreeterComponent }  from './greeter/greeter.component';
import { CalculatorOneComponent } from './calculator/calculatorOne.component';

/*
registry for application entities
	components, directives, pipes 	-> declarations
	services 						-> providers
	external modules				-> imports
*/

@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , CalculatorOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

