import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  InputValue = '0';
  currVal = '';
  operate( value: string){
    this.currVal = this.currVal +  value;
    this.InputValue = this.currVal;
 }
 Result(){
    this.InputValue = eval(this.InputValue);
    
 }
 Clear(){
  this.currVal = '';
  this.InputValue = '0';
 }
}
