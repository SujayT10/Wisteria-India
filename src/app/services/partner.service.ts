import { Partner } from '../classes/partner';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Wallet } from '../classes/wallet';
import { UpdatePartnerProfile } from '../classes/update-partner-profile';
import { CommonLinksService } from './common-links.service';
import { TelentHunt } from '../classes/telent-hunt';
import { Profiledata } from '../classes/profiledata';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  redirectUrl: any;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient, private _linksService : CommonLinksService) { }

  public partnerlogin( userId: string, password: string ) {
    return this.httpClient.post<any>(this._linksService.baseUrl_partner + '/partnerLogin.php', { userId, password })
    .pipe(map(Users => {
        this.setToken(Users[0].partner_id);
        this.getLoggedInName.emit(true);
        return Users;
    }));
  }

  public postDataToDB(partner_id: string){
    return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/getPartnerByID.php',{ partner_id })
      .pipe(map(partner => {
          return partner;
       }));
  }

  recentPartnerBYID(partner_id: string){
    return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/getRecentPartnerById.php',{ partner_id });
  }

  public activePartner(partner_id: string){
    return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/activePartnerById.php', { partner_id });
  }

  getPartner(){
    return this.httpClient.get<Partner[]>(this._linksService.baseUrl_partner + '/partner.php');
  }

  deletePartner(id: any){
    return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/delete.php?', { id } );
  }

  recentPartner(){
    return this.httpClient.get<Partner[]>(this._linksService.baseUrl_partner + '/recentPartners.php');
  }

  public partnerRegistration(firstname: string, lastname: string, contactno: number, email: string, password: string, datetime: any, referalId: string,	address: string) {
    return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/partnerRegister.php', { firstname, lastname, contactno, email, password, datetime, referalId, address })
    .pipe(map(partner => {
    return partner;
    }));
  }

  public addAmount(partner_id:string, amount:string ){
    return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/partnerAmount.php', { partner_id, amount })
    .pipe(map(partner => {
    return partner;
    }));
  }

  public minusAmount(partner_id:string, amount:string ){
    return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/partnerMinusAmount.php', { partner_id, amount })
    .pipe(map(partner => {
    return partner;
    }));
  }

  public forgotPassword(email: string, partner_id: string){
    return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/forgotPassword.php',{ email, partner_id })
      .pipe(map(partner => {
          return partner;
       }));
  }

  public resetPassword(password: string, partner_id: string){
    return this.httpClient.post<Partner[]>(this._linksService.baseUrl_partner + '/resetPassword.php',{ password, partner_id })
    .pipe(map(partner => {
        return partner;
     }));
  }

  public updateProfile(partner_id: string,fullname: string,m_DOB: number,nominee: string,relation: string,n_DOB: number,childName1: string,c1_DOB: number, childName2:string,c2_DOB: number,gf_name: string,gf_DOB: number,
                        gm_name: string,gm_DOB: number,panNumber: string,accNumber: string,bankName: string,ifscCode: string, eContactNo: number,){
      return this.httpClient.post<UpdatePartnerProfile[]>(this._linksService.baseUrl_partner + '/updateProfile.php',
      { partner_id, fullname, m_DOB, nominee, relation, n_DOB, childName1, c1_DOB, childName2,c2_DOB,gf_name, gf_DOB,gm_name, gm_DOB,panNumber, accNumber, bankName, ifscCode,eContactNo})
      .pipe(map(partner => {
      return partner;
      }));
    }

    getUpdateData(){
      return this.httpClient.get<Profiledata[]>(this._linksService.baseUrl_partner + '/getUpdateData.php');
    }

  public show() {
    $(document).ready(function () {
      var navListItems = $('div.setup-panel div a'),
              allWells = $('.setup-content'),
              allNextBtn = $('.nextBtn'),
            allPrevBtn = $('.prevBtn');

      allWells.hide();

      navListItems.click(function (e) {
          e.preventDefault();
          var $target = $($(this).attr('href')),
                  $item = $(this);

          if (!$item.hasClass('disabled')) {
              navListItems.removeClass('btn-primary').addClass('btn-default');
              $item.addClass('btn-primary');
              allWells.hide();
              $target.show();
              $target.find('input:eq(0)').focus();
          }
      });

      allPrevBtn.click(function(){
          var curStep = $(this).closest(".setup-content"),
              curStepBtn = curStep.attr("id"),
              prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

              prevStepWizard.removeAttr('disabled').trigger('click');
      });

      allNextBtn.click(function(){
          var curStep = $(this).closest(".setup-content"),
              curStepBtn = curStep.attr("id"),
              nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
              curInputs = curStep.find("input[type='text'],input[type='url']"),
              isValid = true;

          $(".form-group").removeClass("has-error");
          for(var i=0; i<curInputs.length; i++){
              if (!curInputs[i]){
                  isValid = false;
                  $(curInputs[i]).closest(".form-group").addClass("has-error");
              }
          }

          if (isValid)
              nextStepWizard.removeAttr('disabled').trigger('click');
      });

      $('div.setup-panel div a.btn-primary').trigger('click');
    });
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
