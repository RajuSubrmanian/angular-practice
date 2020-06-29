import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigService {
  
  constructor(private httpClient : HttpClient) {
    console.log(this.httpClient.get("https://reqres.in/api/users/2"));
  }
}