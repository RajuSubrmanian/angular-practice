import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  email = 'test@abc.com';
  count;

  constructor(private dataService : DataService) {
}

submitUser() {
  this.dataService.getUser();
}

  status = true;
  users =[{id:"1",name:"raju"},{id:2,name:"kavi"}];
}
