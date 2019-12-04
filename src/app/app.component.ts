import { Component } from '@angular/core';
import {SidebarComponent} from './SidebarComponent';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  email = 'test@abc.com';

  submitUser() {
    alert(this.email);
  }
}
