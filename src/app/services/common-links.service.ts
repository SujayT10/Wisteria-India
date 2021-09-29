import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonLinksService {

  baseUrl = environment.baseUrl;
  baseUrl2 = environment.baseUrl2;

  baseUrl_api:string = `${this.baseUrl}/php/admin`;
  baseUrl_partner:string = `${this.baseUrl}/php/partner`;
  baseUrl_employee:string = `${this.baseUrl}/php/employee`;
  baseUrl_vendor:string = `${this.baseUrl}/php/vendor`;
  baseUrl_talentHunt:string = `${this.baseUrl2}/#/talent-hunt-registration`;
  referal_link:string = `${this.baseUrl2}/#/referral-registration/`;

// baseUrl_api:string = "http://family.wisteriaindia.com/php/admin";
// baseUrl_partner:string = "http://family.wisteriaindia.com/php/partner";
// baseUrl_employee:string = "http://family.wisteriaindia.com/php/employee";
// baseUrl_vendor:string = "http://family.wisteriaindia.com/php/vendor";
// baseUrl_talentHunt:string = "https://family.wisteriaindia.com/#/talent-hunt-registration";
// referal_link:string = "http://family.wisteriaindia.com/#/referral-registration/";

  constructor() { }
}
