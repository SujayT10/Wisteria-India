import { Partner } from '../classes/partner';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Wallet } from '../classes/wallet';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  redirectUrl: any;
  baseUrl:string = "http://localhost/wisteria-india/php/partner";
  // baseUrl:string = "https://wisteriaindia.com/php/partner";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

  public partnerlogin(username: string, userId: string, password: string ) {
    return this.httpClient.post<any>(this.baseUrl + '/partnerLogin.php', { username, userId, password })
    .pipe(map(Users => {
        this.setToken(Users[0].partner_id);
        this.getLoggedInName.emit(true);
        return Users;
    }));
  }

  public postDataToDB(partner_id: string){
    return this.httpClient.post<Partner[]>(this.baseUrl + '/getPartnerByID.php',{ partner_id })
      .pipe(map(partner => {
          return partner;
       }));
  }

  recentPartnerBYID(partner_id: string){
    return this.httpClient.post<Partner[]>(this.baseUrl + '/getRecentPartnerById.php',{ partner_id });
  }

  public activePartner(partner_id: string){
    return this.httpClient.post<Partner[]>(this.baseUrl + '/activePartnerById.php', { partner_id });
  }

  getPartner(){
    return this.httpClient.get<Partner[]>(this.baseUrl + '/partner.php');
  }

  deletePartner(id: number){
    return this.httpClient.delete<Partner[]>(this.baseUrl + '/delete.php?id='+ id);
  }

  recentPartner(){
    return this.httpClient.get<Partner[]>(this.baseUrl + '/recentPartners.php');
  }

  public partnerRegistration(firstname: string, lastname: string, contactno: number, email: string, password: string, datetime: number, referalId: string,	address: string) {
    return this.httpClient.post<Partner[]>(this.baseUrl + '/partnerRegister.php', { firstname, lastname, contactno, email, password, datetime, referalId, address })
    .pipe(map(partner => {
    return partner;
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
