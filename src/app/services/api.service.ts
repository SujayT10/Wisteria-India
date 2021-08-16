import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';
import { CommonLinksService } from './common-links.service';
import { staticData } from '../components/staticData';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: any;
staticData = staticData;

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient, private _linksService : CommonLinksService) { }

  public userlogin( userId: string, password: string ) {
    return this.httpClient.post<any>(this._linksService.baseUrl_api + '/login.php', { userId, password })
    .pipe(map(Users => {
        this.setToken(Users[0].admin_id);
        this.getLoggedInName.emit(true);
        return Users;
    }));

  }

  public userregistration(name: string, lastname: string, email: string,contactno: number, pwd: string, ) {
    return this.httpClient.post<Users>(this._linksService.baseUrl_api + '/register.php', { name, lastname, email, pwd, contactno })
    .pipe(map(Users => {
    return Users;
    }));
   }

   getPartner(){
    return this.httpClient.get<Users[]>(this._linksService.baseUrl_api + '/getAdmin.php');
  }

  public activeUser(admin_id: string){
    return this.httpClient.post<Users[]>(this._linksService.baseUrl_api + '/activeUserById.php', { admin_id });
  }

  getStaticData(){
    return this.staticData;
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
