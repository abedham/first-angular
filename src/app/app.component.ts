import { Component } from '@angular/core';
import { User } from './User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user = new User("Abdlerahman", "abed.ha15@gmail.com");
  title = 'app: ' + this.user.name;
}
