import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  FirstNumber:number;
  SecondNumber:number;
  result: number;

  getFirstNumber(val:number){
    this.FirstNumber = Number(val);
  }

  getSecondNumber(val:number){
    this.SecondNumber = Number(val);
  }

  onCalculate (){
  	this.result = this.FirstNumber + this.SecondNumber;
  }
}
