import { PartnerService } from './../../services/partner.service';
import * as $ from 'jquery';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { confirmedValidator } from 'src/app/confirmed.validator';
import { NotificationsService } from 'angular2-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  angForm: FormGroup;
  partner_id:string;
  public options:any = {
    showProgressBar: false,
    position: ["bottom", "right"],
    timeOut: 2000,
    animate: "fade",
  };

  constructor(private fb: FormBuilder,
              private partnerService: PartnerService,
              private router:Router,
              private _service: NotificationsService,
              private ngxService: NgxUiLoaderService) {
    this.angForm = this.fb.group({

      fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      m_DOB: ['', [Validators.required]],
      nominee: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      relation: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      n_DOB: ['', [Validators.required]],
      childName1: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      c1_DOB: ['', [Validators.required]],
      childName2: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      c2_DOB: ['', [Validators.required]],
      gf_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      gf_DOB: ['', [Validators.required]],
      gm_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      gm_DOB: ['', [Validators.required]],
      panNumber: ['', [Validators.required]],
      accNumber: ['', [Validators.required]],
      bankName: ['', [Validators.required]],
      branchName: ['', [Validators.required]],
      ifscCode: ['', [Validators.required]],
      eContactNo: ['', [Validators.required]],

      });
  }

  ngOnInit() {
    this.partnerService.show();
    this.partner_id = this.partnerService.getToken();
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
    this.partnerService.updateProfile(angForm1.value.fullname, angForm1.value.m_DOB,
                                      angForm1.value.nominee, angForm1.value.relation,
                                      angForm1.value.n_DOB, angForm1.value.childName1,
                                      angForm1.value.c1_DOB, angForm1.value.childName2,
                                      angForm1.value.c2_DOB, angForm1.value.gf_name,
                                      angForm1.value.gf_DOB, angForm1.value.gm_name,
                                      angForm1.value.gm_DOB, angForm1.value.panNumber,
                                      angForm1.value.accNumber, angForm1.value.bankName,
                                      angForm1.value.ifscCode,  angForm1.value.eContactNo,)


      .pipe(first())
      .subscribe(
                  data => {
                  this.angForm.reset();
                  },
                  error => {
                    this.onSuccess();
                    this.angForm.reset();
                    // console.log("Error from  Add-Partner")
                  }
                );

  }

  onSuccess(){ this._service.success('Successfully Registred'); }

  loader(){
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 9000);
  }


  get fullname() { return this.angForm.get('fullname'); }
  get m_DOB() { return this.angForm.get('m_DOB'); }
  get nominee() { return this.angForm.get('nominee'); }
  get relation() { return this.angForm.get('relation'); }
  get n_DOB() { return this.angForm.get('n_DOB'); }
  get childName1() { return this.angForm.get('childName1'); }
  get c1_DOB() { return this.angForm.get('c1_DOB'); }
  get childName2() { return this.angForm.get('childName2'); }
  get c2_DOB() { return this.angForm.get('c2_DOB'); }
  get gf_name() { return this.angForm.get('gf_name'); }
  get gf_DOB() { return this.angForm.get('gf_DOB'); }
  get gm_name() { return this.angForm.get('gm_name'); }
  get gm_DOB() { return this.angForm.get('gm_DOB'); }
  get panNumber() { return this.angForm.get('panNumber'); }
  get bankName() { return this.angForm.get('bankName'); }
  get accNumber() { return this.angForm.get('accNumber'); }
  get branchName() { return this.angForm.get('branchName'); }
  get ifscCode() { return this.angForm.get('ifscCode'); }
  get eContactNo() { return this.angForm.get('eContactNo'); }


}
