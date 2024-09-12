import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  standalone: true,
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
})
export class GreetingsComponent {
  greeting: string = 'Hello, welcome to the Angular ESLint demo!';

  constructor() {}

  changeGreeting(): void {
    if (this.greeting === 'Hello, welcome to the Angular ESLint demo!') {
      this.greeting = 'Hi there, ESLint and Prettier are awesome!';
    } else {
      this.greeting = 'Hello, welcome to the Angular ESLint demo!';
    }
  }
}
