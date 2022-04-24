import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent  {

  user: User | undefined;

    constructor(private accountService: AccountService) {
        // this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }


}
