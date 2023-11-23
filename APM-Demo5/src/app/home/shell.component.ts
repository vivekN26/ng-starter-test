import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pm-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {
  numbersArray = [1, 6, 3, 2, 9, 10];
  area: string;

  constructor() { }

  ngOnInit() {
    this.getMaximum();
    this.getArea();
    this.getMinimumNumber();
  }

  getMaximum() {
    // get maximum value from given array
    return Math.min(...this.numbersArray);
  }

  getArea() {
    let a = 4 -6;
    console.log(a);
  }

  /**
   * @description get the number array list and return maximum number
   * @returns maximum number
   * 
   */
  getMinimumNumber() {
    // get minimum number from the list
      let min = this.numbersArray[0];
      for (let i = 1; i < this.numbersArray.length; i++) {
        if (this.numbersArray[i] < min) {
          min = this.numbersArray[i];
        }
      }
      return min;
  
  }

}
