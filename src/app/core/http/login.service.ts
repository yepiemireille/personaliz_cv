import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  api_url ="./assets/data/user-login.json"

  login(login:string, password:string){
    return this.http.post<any>(this.api_url, {login, password})
  }
}
