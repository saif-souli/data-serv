import { Component } from '@angular/core';
import { User } from './_models';
import { AccountService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mysystem';

  constructor() { }

  ngOnInit(): void {
  }


}
