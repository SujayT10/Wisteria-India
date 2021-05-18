import { Employee } from './../classes/employee';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  redirectUrl: any;
  baseUrl:string = "http://localhost/wisteria-india/php/employee";
  // baseUrl:string = "https://wisteriaindia.com/php/admin";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

    public userlogin(username: string , userId: string, password: string ) {
      return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, userId, password })
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

    public getEmp(){
      return this.httpClient.get<Employee[]>(this.baseUrl + '/getEmp.php');
    }

    public activeUser(admin_id: string){
      return this.httpClient.post<Users[]>(this.baseUrl + '/activeUserById.php', { admin_id });
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



