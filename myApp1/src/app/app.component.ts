import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstNumber: string;
  secondNumber: string;
  result: number;
  onCalculate (){
  	this.result = Number(this.firstNumber)+Number(this.secondNumber);
  }
}
