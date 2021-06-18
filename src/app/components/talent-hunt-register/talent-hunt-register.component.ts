
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { confirmedValidator } from 'src/app/confirmed.validator';
import { NotificationsService } from 'angular2-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-talent-hunt-register',
  templateUrl: './talent-hunt-register.component.html',
  styleUrls: ['./talent-hunt-register.component.css']
})
export class TalentHuntRegisterComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder,
              private partnerService: PartnerService,
              private router:Router,
              private _service: NotificationsService,
              private ngxService: NgxUiLoaderService) {
      this.angForm = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      DOB: ['', [Validators.required]],
      hobbie: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],

      transaction_id: ['', [Validators.required]],
      address: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
      contactno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      });
}

  ngOnInit(): void {

    this.partnerService.show();
    this.show();

  }

  show(){
    $(document).ready(function(){
      //group add limit
      var maxGroup = 5;

      //add more fields group
      $(".addMore").click(function(){
          if($('body').find('.fieldGroup').length < maxGroup){
              var fieldHTML = '<div class="form-group fieldGroup">'+$(".fieldGroupCopy").html()+'</div>';
              $('body').find('.fieldGroup:last').after(fieldHTML);
          }else{
              alert('Maximum '+maxGroup+' groups are allowed.');
          }
      });

      //remove fields group
      $("body").on("click",".remove",function(){
          $(this).parents(".fieldGroup").remove();
      });
  });

  }


  get name() { return this.angForm.get('name'); }
  get DOB() { return this.angForm.get('DOB'); }
  get hobbie() { return this.angForm.get('hobbie'); }
  get email() { return this.angForm.get('email'); }
  get address() { return this.angForm.get('address'); }
  get pinCode() { return this.angForm.get('pinCode'); }
  get contactno() { return this.angForm.get('contactno'); }
  get transaction_id() { return this.angForm.get('transaction_id'); }

}
