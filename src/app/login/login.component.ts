import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm :FormGroup;
  constructor() {
    this.loginForm = new FormGroup ({
      'email': new FormControl(),
      'name' : new FormControl()
    });
  }
  
  status = true;
  users =[{id:"1",name:"raju"},{id:2,name:"kavi"}];
}