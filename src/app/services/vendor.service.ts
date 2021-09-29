import { VendorProducts } from './../classes/vendor-products';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Wallet } from '../classes/wallet';
import { UpdatePartnerProfile } from '../classes/update-partner-profile';
import { CommonLinksService } from './common-links.service';
import { TelentHunt } from '../classes/telent-hunt';
import { Partner } from '../classes/partner';
import { Vendor } from '../classes/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  redirectUrl: any;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient, private _linksService: CommonLinksService) { }

  public vendorLogin(userId: string, password: string) {
    return this.httpClient.post<Vendor[]>(`${this._linksService.baseUrl_vendor}/vendorLogin.php`, { userId, password })
      .pipe(map(Users => {
        this.setToken(Users[0].vendor_id);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }

  public postDataToDB(vendor_id: string){
    return this.httpClient.post<VendorProducts[]>(this._linksService.baseUrl_vendor + '/getVendorByID.php',{ vendor_id })
      .pipe(map(vendor => {
          return vendor;
       }));
  }

  // recentPartnerBYID(partner_id: string){
  //   return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/getRecentPartnerById.php',{ partner_id });
  // }

  public activeVendor(vendor_id: string){
    return this.httpClient.post<Vendor[]>(this._linksService.baseUrl_vendor + '/activeVendorById.php', { vendor_id });
  }

  getVendor() {
    return this.httpClient.get<Vendor[]>(this._linksService.baseUrl_vendor + '/vendor.php');
  }

  deleteVendor(id: any) {
    return this.httpClient.post<Vendor[]>(this._linksService.baseUrl_vendor + '/deleteVendor.php?', { id });
  }

  recentVendor() {
    return this.httpClient.get<Vendor[]>(this._linksService.baseUrl_vendor + '/recentVendors.php');
  }

  public vendorRegistration(cName: string, fullName: string, email: string, contactno: number, password: string, address: string, zipCode: number, date: any) {
    return this.httpClient.post<Vendor[]>(this._linksService.baseUrl_vendor + '/vendorRegister.php',
      { cName, fullName, email, contactno, password, address, zipCode, date })
      .pipe(map(vendor => {
        return vendor;
      }));
  }

  public addProducts(sku: string, productName: string, description: string, unitPrice: number, imgUrl: string, unitInStocks: number, vendor_id: string, todayDate: any, active: boolean) {
    return this.httpClient.post<VendorProducts[]>(this._linksService.baseUrl_vendor + '/addProducts.php',
      { sku, productName, description, unitPrice, imgUrl, unitInStocks, vendor_id, todayDate, active })
      .pipe(map(vendorProducts => {
        return vendorProducts;
      }));
  }




  // public addAmount(partner_id:string, amount:string ){
  //   return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/partnerAmount.php', { partner_id, amount })
  //   .pipe(map(partner => {
  //   return partner;
  //   }));
  // }

  // public forgotPassword(email: string, partner_id: string){
  //   return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/forgotPassword.php',{ email, partner_id })
  //     .pipe(map(partner => {
  //         return partner;
  //      }));
  // }

  // public resetPassword(password: string, partner_id: string){
  //   return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/resetPassword.php',{ password, partner_id })
  //   .pipe(map(partner => {
  //       return partner;
  //    }));
  // }

  // public updateProfile(partner_id: string,fullname: string,m_DOB: number,nominee: string,relation: string,n_DOB: number,childName1: string,c1_DOB: number, childName2:string,c2_DOB: number,gf_name: string,gf_DOB: number,
  //                       gm_name: string,gm_DOB: number,panNumber: string,accNumber: string,bankName: string,ifscCode: string, eContactNo: number,){
  //     return this.httpClient.post<UpdatePartnerProfile[]>(this._linksService.baseUrl_partner + '/updateProfile.php',
  //     { partner_id, fullname, m_DOB, nominee, relation, n_DOB, childName1, c1_DOB, childName2,c2_DOB,gf_name, gf_DOB,gm_name, gm_DOB,panNumber, accNumber, bankName, ifscCode,eContactNo})
  //     .pipe(map(partner => {
  //     return partner;
  //     }));
  //   }



  // public show() {
  //   $(document).ready(function () {
  //     var navListItems = $('div.setup-panel div a'),
  //             allWells = $('.setup-content'),
  //             allNextBtn = $('.nextBtn'),
  //           allPrevBtn = $('.prevBtn');

  //     allWells.hide();

  //     navListItems.click(function (e) {
  //         e.preventDefault();
  //         var $target = $($(this).attr('href')),
  //                 $item = $(this);

  //         if (!$item.hasClass('disabled')) {
  //             navListItems.removeClass('btn-primary').addClass('btn-default');
  //             $item.addClass('btn-primary');
  //             allWells.hide();
  //             $target.show();
  //             $target.find('input:eq(0)').focus();
  //         }
  //     });

  //     allPrevBtn.click(function(){
  //         var curStep = $(this).closest(".setup-content"),
  //             curStepBtn = curStep.attr("id"),
  //             prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

  //             prevStepWizard.removeAttr('disabled').trigger('click');
  //     });

  //     allNextBtn.click(function(){
  //         var curStep = $(this).closest(".setup-content"),
  //             curStepBtn = curStep.attr("id"),
  //             nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
  //             curInputs = curStep.find("input[type='text'],input[type='url']"),
  //             isValid = true;

  //         $(".form-group").removeClass("has-error");
  //         for(var i=0; i<curInputs.length; i++){
  //             if (!curInputs[i]){
  //                 isValid = false;
  //                 $(curInputs[i]).closest(".form-group").addClass("has-error");
  //             }
  //         }

  //         if (isValid)
  //             nextStepWizard.removeAttr('disabled').trigger('click');
  //     });

  //     $('div.setup-panel div a.btn-primary').trigger('click');
  //   });
  // }

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
