import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pm-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {
  numbersArray = [1, 6, 3, 2, 9, 10];
  area: number;
  length = 10;
  width = 40;


  constructor() { }

  ngOnInit() {
    this.getMaximum();
    this.getArea();
    this.getMinimumNumber();
      // Example usage
  const result1 = this.complexNestedLogic(8);
  const result2 = this.complexNestedLogic(-9);
  const result3 = this.complexNestedLogic(0);
  this.area = this.getArea(this.width, this.length);
  document.getElementById('my-area').innerHTML = this.area.toString();
  this.highCognitiveComplexity(true, true);
  this.inconsistentReturnType(true);
  this.unreachableCode(true);
  this.getDisplayUserName();
  }

  getDisplayUserName() {
    let user = 'Test-user';
    document.getElementById('my-user').innerHTML = user;
  }

  getMaximum() {
    // get maximum value from given array
    return Math.min(...this.numbersArray);
  }

  getArea() {
    let a = 4 -6;
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
        if (this.numbersArray[i] > min) {
          min = this.numbersArray[i];
        }
      }
      return min;
  
  }


 complexNestedLogic(value: number): string {
    let result = '';
  
    if (value > 0) {
      result += 'Level 1: Value is positive';
  
      if (value % 2 === 0) {
        result += 'Level 2: Value is even';
  
        if (value % 4 === 0) {
          result += 'Level 3: Value is divisible by 4';
  
          for (let i = 0; i < 3; i++) {
            result += `Level 4: Loop iteration ${i}`;
  
            for (let j = 0; j < 2; j++) {
              result += `Level 5: Nested Loop iteration ${j}`;
            }
          }
  
        } else {
          result += 'Level 3: Value is not divisible by 4';
        }
  
      } else {
        result += 'Level 2: Value is odd';
      }
  
    } else if (value < 0) {
      result += 'Level 1: Value is negative';
  
      if (value % 3 === 0) {
        result += 'Level 2: Value is divisible by 3';
  
        for (let i = 0; i < 2; i++) {
          result += `Level 3: Loop iteration ${i}`;
        }
  
      } else {
        result += 'Level 2: Value is not divisible by 3';
      }
  
    } else {
      result += 'Level 1: Value is zero';
    }
  
    return result;
  }


  getArea(length, width) {
    let area = length * width;
    return area;
  }

  unreachableCode(flag: boolean) {
    if (flag) {
      return 1;
    } else {
      // This code is unreachable
      return 2;
    }
  }

  // In a component or service
inconsistentReturnType(flag: boolean): string | number {
  if (flag) {
    return "Hello";
  } else {
    return 42;
  }
}

highCognitiveComplexity(flag1: boolean, flag2: boolean) {
  if (flag1) {
    if (flag2) {
      // Do something
    } else {
      // Do something else
    }
  } else {
    // Do another thing
  }
}
}
