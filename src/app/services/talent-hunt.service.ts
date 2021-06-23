import { Partner } from '../classes/partner';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Wallet } from '../classes/wallet';
import { UpdatePartnerProfile } from '../classes/update-partner-profile';
import { CommonLinksService } from './common-links.service';
import { TelentHunt } from '../classes/telent-hunt';

@Injectable({
  providedIn: 'root'
})
export class TalentHuntService {

  redirectUrl: any;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient, private _linksService : CommonLinksService) { }

  public th_register(name: string, dob: string, hobbie: string,
                     name2: string, dob2: string, hobbie2: string,
                     name3: string, dob3: string, hobbie3: string,
                     name4: string, dob4: string, hobbie4: string,
                     name5: string, dob5: string, hobbie5: string,
                     email: any, contactno: any, address: any, pinCode: any, transaction_id: any, dt: any) {
    return this.httpClient.post<TelentHunt[]>(this._linksService.baseUrl_talentHunt + '/talentHunt_Register.php',
    { name, dob, hobbie,name2, dob2, hobbie2,name3, dob3, hobbie3,name4, dob4, hobbie4,name5, dob5, hobbie5, email, contactno, address, pinCode, transaction_id, dt })
    .pipe(map(th => {
    return th;
    }));
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
