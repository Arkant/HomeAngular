import { Component, EventEmitter } from '@angular/core';
import { Input} from '@angular/core'
import { Output} from '@angular/core'

@Component({
  selector: 'app-operand',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.css']
})
export class OperandComponent {

	@Output() onValChange = new EventEmitter<number>();
	inputNumber: number;

 	 onChange(){
  		this.onValChange.emit(this.inputNumber);
  	}

}
