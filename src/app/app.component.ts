import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: Array<number> = [1, 2, 3, 4, 5];
  // oddNumbers = [1, 3, 5];
  oddNumbers: Array<number> = this.numbers.filter(i => i % 2 !== 0);
  // evenNumbers = [2, 4];
  evenNumbers: Array<number> = this.numbers.filter(i => i % 2 === 0);
  onlyOdd = false;
  value = 5;
  dropdown = true;
}
