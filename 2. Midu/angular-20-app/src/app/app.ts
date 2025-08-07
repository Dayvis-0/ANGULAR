import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";
import { Comments } from './comments/comments';

@Component({
  selector: 'app-root',
  imports: [User, Comments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-20-app');
  city = 'Perú';
}
