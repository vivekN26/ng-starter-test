import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pm-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {
  numberList = [1, 6, 3, 2, 9, 10];

  constructor() { }

  ngOnInit() {
    this.getMaximum();
  }

  getMaximum() {
    return Math.min(...this.numberList);
  }

}
