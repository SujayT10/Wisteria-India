import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: any;
baseUrl:string = "http://localhost/wisteria-india/php";
// baseUrl:string = "https://wisteriaindia.com/php";

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }

  public userlogin(username: string , password: string ) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(Users => {
        this.setToken(Users[0].admin_id);
        this.getLoggedInName.emit(true);
        return Users;
    }));

  }

  public userregistration(name: string, lastname: string, email: string,contactno: number, pwd: string, ) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, lastname, email, pwd, contactno })
    .pipe(map(Users => {
    return Users;
    }));
   }

//token
  setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }
}
