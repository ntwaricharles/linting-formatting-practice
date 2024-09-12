import { Component, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { GreetingsComponent } from './greetings/greetings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent, GreetingsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'linting-formatting-practice';

  constructor() {}

  ngOnInit() {
    const x = 10;
    if (x === 10) {
      return;
    }
  }

  public doSomething(): void {}
}
