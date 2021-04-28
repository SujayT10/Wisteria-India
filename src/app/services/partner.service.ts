import { Partner } from '../classes/partner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  baseUrl:string = "http://localhost/wisteria-india/php";

  constructor(private httpClient : HttpClient) { }

  getPartner(){
    return this.httpClient.get<Partner[]>(this.baseUrl + '/partner.php');
  }

  deletePartner(id: number){
    return this.httpClient.delete<Partner[]>(this.baseUrl + '/delete.php?id='+ id);
  }

  recentPartner(){
    return this.httpClient.get<Partner[]>(this.baseUrl + '/recentPartners.php');
  }

  public partnerRegistration(firstname: string, lastname: string, email: string, role:string, datetime: number,pwd: string, contactno: number) {
    return this.httpClient.post<Partner[]>(this.baseUrl + '/addPartner.php', { firstname, lastname, email, role, datetime, pwd, contactno })
    .pipe(map(partner => {
    return partner;
    }));
  }
}
