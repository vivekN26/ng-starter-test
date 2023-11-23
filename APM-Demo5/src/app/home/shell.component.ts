import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pm-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {
  numberList = [1, 6, 3, 2, 9, 10];
  area: string;

  constructor() { }

  ngOnInit() {
    this.getMaximum();
    this.getArea();
    console.log('testing some random chnges');
  }

  getMaximum() {
    // get maximum value from given array
    return Math.min(...this.numberList);
  }

  getArea() {
    let a = 4 -6;
    console.log(a);
  }

}
