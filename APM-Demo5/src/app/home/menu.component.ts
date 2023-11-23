import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../user/auth.service';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Acme Product Management';
  numberList = [1, 6, 3, 2, 9, 10];

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getMinValue();
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

  /**
   * @description get lis of all bank account numbers
   * @returns bank account numbers
   */
  getMinValue() {
    return Math.max(...this.numberList);
  }
}
