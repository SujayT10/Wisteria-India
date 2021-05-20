import { PartnerService } from './../../../services/partner.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { confirmedValidator } from 'src/app/confirmed.validator';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-p-add',
  templateUrl: './p-add.component.html',
  styleUrls: ['./p-add.component.css']
})
export class PAddComponent implements OnInit {

  angForm: FormGroup;
  partner_id:string;
  public options:any = {
    showProgressBar: false,
    position: ["bottom", "right"],
    timeOut: 2000,
    animate: "fade",
  };

  constructor(private fb: FormBuilder,private partnerService: PartnerService, private router:Router,private _service: NotificationsService) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      referalId: ['', [Validators.required]],
      address: ['', [Validators.required]],
      datetime: ['', [Validators.required]],
      wallet: ['', [Validators.required]],
      contactno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.minLength(8)] ],
      confirmpassword: ['',[Validators.required]]
      },{
        validator: confirmedValidator('password', 'confirmpassword')
       });
  }

  ngOnInit() {
    this.partner_id = this.partnerService.getToken();
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
    this.partnerService.partnerRegistration(angForm1.value.firstname,
                                            angForm1.value.lastname,
                                            angForm1.value.wallet,
                                            angForm1.value.contactno,
                                            angForm1.value.email,
                                            angForm1.value.password,
                                            angForm1.value.datetime,
                                            angForm1.value.referalId,
                                            angForm1.value.address)
      .pipe(first())
      .subscribe(
                  data => {
                  this.angForm.reset();
                  },
                  error => {
                    console.log("Error from  Add-Partner")
                  }
                );

  }

  onSuccess(){ this._service.success('Successfully Registred'); }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get confirmpassword() { return this.angForm.get('confirmpassword'); }
  get firstname() { return this.angForm.get('firstname'); }
  get lastname() { return this.angForm.get('lastname'); }
  get contactno() { return this.angForm.get('contactno'); }
  get referalId() { return this.angForm.get('referalId'); }
  get address() { return this.angForm.get('address'); }
  get datetime() { return this.angForm.get('address'); }
  get wallet() { return this.angForm.get('wallet'); }
}
