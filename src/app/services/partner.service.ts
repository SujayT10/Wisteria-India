import { Partner } from '../classes/partner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  getPartner(){
    const url = 'http://localhost/wisteria-india/php/partner.php';
    return this.http.get<Partner[]>(url);
  }

  deletePartner(id: number){
    const url = 'http://localhost/wisteria-india/php/delete.php?id=';
    return this.http.delete<Partner[]>(url+ id);
  }

  recentPartner(){
    const url = 'http://localhost/wisteria-india/php/recentPartners.php';
    return this.http.get<Partner[]>(url);
  }
}
