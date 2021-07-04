
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { confirmedValidator } from 'src/app/confirmed.validator';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PartnerService } from 'src/app/services/partner.service';
import { TalentHuntService } from 'src/app/services/talent-hunt.service';

@Component({
  selector: 'app-talent-hunt-register',
  templateUrl: './talent-hunt-register.component.html',
  styleUrls: ['./talent-hunt-register.component.css']
})
export class TalentHuntRegisterComponent implements OnInit {

  angForm: FormGroup;
  formName = "Full Name";
  formDOB = "Date Of Birth";
  formTalent = "Talent";
  demoName = 'for ex. Alex Lynn';
  demoDate = 'for ex. 15-Aug-1995';
  demoHobbie = 'for ex. Dancing';
  demoName2 = 'for ex. Jone Lynn';
  demoDate2 = 'for ex. 15-Aug-1995';
  demoHobbie2 = 'for ex. Painting';
  demoName3 = 'for ex. Eone Lynn';
  demoDate3 = 'for ex. 15-Aug-1995';
  demoHobbie3 = 'for ex. Singing';
  demoName4 = 'for ex. Alex Lynn';
  demoDate4 = 'for ex. 15-Aug-1995';
  demoHobbie4 = 'for ex. Dancing';
  demoName5 = 'for ex. Alex Lynn';
  demoDate5 = 'for ex. 15-Aug-1995';
  demoHobbie5 = 'for ex. Dancing';

  dt = new Date();

  constructor(private fb: FormBuilder,
              private partnerService: PartnerService,
              private _thService: TalentHuntService,
              private router:Router,
              private ngxService: NgxUiLoaderService) {
      this.angForm = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      DOB: ['', [Validators.required]],
      hobbie: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      name2: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      DOB2: ['', [Validators.required]],
      hobbie2: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      name3: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      DOB3: ['', [Validators.required]],
      hobbie3: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      name4: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      DOB4: ['', [Validators.required]],
      hobbie4: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      name5: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      DOB5: ['', [Validators.required]],
      hobbie5: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],

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
    console.log(this.dt)
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
    this._thService.th_register( angForm1.value.name, angForm1.value.DOB,angForm1.value.hobbie,
                                      angForm1.value.name2, angForm1.value.DOB2,angForm1.value.hobbie2,
                                      angForm1.value.name3, angForm1.value.DOB3,angForm1.value.hobbie3,
                                      angForm1.value.name4, angForm1.value.DOB4,angForm1.value.hobbie4,
                                      angForm1.value.name5, angForm1.value.DOB5,angForm1.value.hobbie5,
                                     angForm1.value.email, angForm1.value.contactno, angForm1.value.address,
                                     angForm1.value.pinCode, angForm1.value.transaction_id, this.dt)
      .pipe(first())
      .subscribe(
                  data => {
                  // this.angForm.reset();
                  // this.onSuccess();
                  this.router.navigate([ '/talent-hunt-registration/successful' ]);
                  console.log("form Update Profile");
                  },
                  error => {
                    // this.onSuccess();
                    // console.log(angForm1.value)
                    // console.log("Error from Update profile");
                    this.router.navigate([ '/talent-hunt-registration/successful' ]);
                  }
                );

  }

  loader(){
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 9000);
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
              alert('Maximum '+maxGroup+' entries are allowed.');
          }
      });

      //remove fields group
      $("body").on("click",".remove",function(){
          $(this).parents(".fieldGroup").remove();
      });
  });

  }


  get name() { return this.angForm.get('name'); }
  get name1() { return this.angForm.get('name'); }
  get DOB() { return this.angForm.get('DOB'); }
  get hobbie() { return this.angForm.get('hobbie'); }
  get email() { return this.angForm.get('email'); }
  get address() { return this.angForm.get('address'); }
  get pinCode() { return this.angForm.get('pinCode'); }
  get contactno() { return this.angForm.get('contactno'); }
  get transaction_id() { return this.angForm.get('transaction_id'); }

}
