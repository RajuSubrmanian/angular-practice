import { Component } from '@angular/core';
import {DataService} from './service/data.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  email = 'test@abc.com';
  count;

  submitUser() {
    alert(this.email);
  }

  constructor(private dataService : DataService) {
    this.count = dataService.count;
  }
  

  getIncreaseCount(count) {
    this.dataService.getIncreaseCount();
  }

  status = true;
  users =[{id:"1",name:"raju"},{id:2,name:"kavi"}];
}
