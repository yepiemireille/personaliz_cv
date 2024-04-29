import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  api_url ="./assets/data/user-login.json" 
  api_urla ="./assets/data/test-a.json"

  login(login:string, password:string){
    return this.http.post<any>(this.api_url, {login, password})
  }

  getTest(){
    return this.http.get<any>(this.api_url)
  }

  getTesta(){
    return this.http.get<any>(this.api_urla)
  }

}
