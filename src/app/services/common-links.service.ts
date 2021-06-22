import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonLinksService {

  baseUrl_api:string = "http://localhost/wisteria-india/php/admin";
  baseUrl_partner:string = "http://localhost/wisteria-india/php/partner";
  baseUrl_employee:string = "http://localhost/wisteria-india/php/employee";
  baseUrl_talentHunt:string = "http://localhost/wisteria-india/php/talent-hunt";
  referal_link:string = "http://localhost:4200/#/referral-registration/";

// baseUrl_api:string = "https://wisteriaindia.com/php/admin";
// baseUrl_partner:string = "https://wisteriaindia.com/php/partner";
// baseUrl_employee:string = "https://wisteriaindia.com/php/employee";
// baseUrl_talentHunt:string = "https://wisteriaindia.com/php/talent-hunt";
// referal_link:string = "https://wisteriaindia.com/#/referral-registration/";

  constructor() { }
}
