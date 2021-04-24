import { Partner } from './partner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  getPartner(){
    return this.http.get<Partner[]>('http://localhost/wisteria-india/php/partner.php')
  }
}
