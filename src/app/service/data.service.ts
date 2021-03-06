import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) {
    
  }

  getUser() {
    return this.httpClient.get("https://reqres.in/api/users/2");
  }

}